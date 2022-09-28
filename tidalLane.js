class TidalLane {
    constructor(parentId, roadList,canvasId) {
        this.canvasId = canvasId||'tidalLaneCanvas'
        this.parentId = parentId
        this.ctx = null
        this.canvasArea = null
        //线X轴
        this.lineX = 0
        //方向X
        this.arrowX = 0
        //方向图片宽高
        this.imgWH = [64,64]
        this.roadList = roadList
        this.init()
    }
    /**
     * @description 初始化布局方法
     * @param {} 
     * @return {void}
    */
    init() {
        const self = this
        var myCanvas = document.createElement("canvas");
        var canvasArea = document.getElementById(this.parentId)
        this.canvasArea = canvasArea
        let canvasHeight = canvasArea.offsetHeight
        let canvasWidth = canvasArea.offsetWidth
        myCanvas.setAttribute("height", canvasHeight*2);
        myCanvas.setAttribute("width", canvasWidth*2);
        myCanvas.setAttribute("id", this.canvasId);
        myCanvas.setAttribute("style", `background-color: #555;width:${canvasWidth}px;height:${canvasHeight}px`);
        myCanvas.style.position = "absolute";
        canvasArea.style.position = "relative";
        canvasArea.appendChild(myCanvas);
        this.ctx = myCanvas.getContext("2d");
        window.addEventListener("resize", resizeCanvas, false);
        //画面变化重新设置
        function resizeCanvas() {
            myCanvas.width = canvasArea.offsetWidth*2
            myCanvas.height = canvasArea.offsetHeight*2
            self.setRoadList()
        }
        this.setRoadList()
    }
    //设置道路信息
    async setRoadList(roadList = this.roadList) {
        this.roadList = roadList
        //重置画布及参数
        this.resetCanvasAndData()
        
        //拼接组装车道线数据并画
        this.markLineAndDraw()
        for(let i=0;i<this.roadList.length;i++){
            const road = this.roadList[i]
            //添加方向
            await this.drawArrow(road.tidal,road.type)
            //只有潮汐车道添加文字 
            road.tidal&&this.drawTidalTitle(i)
        }
    }
    //拼接车道线数据并画
    markLineAndDraw(){
        const lineStyle = new Array((this.roadList.length||1)-1).fill(0)
        //[0,0,0,1]
        this.roadList.map((item,index)=>{
            if(item.tidal){
                //大于0
                index-1>=0&&(lineStyle[index-1] = 1)
                //不等于最后一位
                index!==this.roadList.length-1&&(lineStyle[index] = 1)
            }
        })
        lineStyle.map(line=>{
            //画线
            this.drawTidalLine(line)
        })
    }
    //车道行进箭头
    // flag - 是否为潮汐车道
    // type - 方向  top|bottom
    drawArrow(flag,type) {
        return new Promise(res=>{
            const width = this.canvasArea.offsetWidth
            const height = this.canvasArea.offsetHeight
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = `./images/${flag?'tidal-':''}${type}.png`;
            img.onload =  ()=> {
                this.ctx.drawImage(img, Math.floor(this.arrowX)*2 - 0.5,Math.floor(height*1.2)- 0.5, this.imgWH[0], this.imgWH[1]);
                this.ctx.restore()
                this.arrowX+= width/this.roadList.length; 
                res()
            };
        })
    }
    //车道文字
    //所在车道的index
    drawTidalTitle(index){
        const textContent = '潮汐车道'
        const width = this.canvasArea.offsetWidth
        this.ctx.font="28px Arial"
        const textX = width/this.roadList.length*index
        //文字Y轴距离
        var y = 20
        //Y轴间距
        var letterSpacing = 0
        this.ctx.fillStyle="#dd9f54"
        for(let i=0;i<textContent.length;i++){
            const str = textContent[i]
            y+=this.ctx.measureText(str).width+letterSpacing
            //文字在道路中位置
            const roadCenterX = (textX+width/this.roadList.length/2)*2 - this.ctx.measureText(str).width/2
            this.ctx.fillText(str, Math.floor(roadCenterX), y*2) //填充文字 
        }
        this.ctx.restore();
        this.ctx.closePath();
        
    }
    //画潮汐
    // flag  - 是否为潮汐车道
    drawTidalLine(flag) {
        const height = this.canvasArea.offsetHeight*2
        const width = this.canvasArea.offsetWidth
        this.lineX += width/this.roadList.length*2
        //间距
        const setLineDash = 15*2


        if(flag){
            //画潮汐车道
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#dd9f54'
            this.ctx.lineWidth = 3
            this.ctx.setLineDash([setLineDash, setLineDash]);
            //所属X轴 后期动态计算
            this.ctx.moveTo(this.lineX,0 );
            this.ctx.lineTo(this.lineX,height );
            this.ctx.stroke();
            
            this.ctx.beginPath();
            this.ctx.lineWidth = 3
            this.ctx.moveTo(this.lineX+5,0 );
            this.ctx.lineTo(this.lineX+5,height );
            this.ctx.stroke();
        }else{
            //画单行
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#fff'
            this.ctx.lineWidth = 3
            this.ctx.setLineDash([setLineDash, setLineDash]);
            //所属X轴 后期动态计算
            this.ctx.moveTo(this.lineX,0);
            this.ctx.lineTo(this.lineX,height );
            this.ctx.stroke();
        }
        
        
    }
    //重置默认数据和画布
    resetCanvasAndData(){
        //重置画布
        this.ctx.clearRect(0, 0, this.canvasArea.offsetWidth*2, this.canvasArea.offsetHeight*2);
        const width = this.canvasArea.offsetWidth
        //重置基础数据
        //线X轴
        this.lineX = 0
        //方向
        this.arrowX = (width/this.roadList.length/2 - this.imgWH[0]/4);
        
    }

}

// export default TidalLane