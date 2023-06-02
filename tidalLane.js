const image64 = {
    bottom : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA05JREFUeF7tm0uIjlEYx3//slBYyaWUlYVLZEMpJbOQGQ0LUUwpRaIIpYRCzWSjXBI1hSxMSlmIwYaRHSv3lYRMtkJkc3TqsJjp+7733N4x35yz/Z7r73vec57znvOKCT40wfOnVgDGmFnAgibQfwHDwBdJv+v4c2oBYIzZBBwDllRM6hNwXNLVivLBYtkBGGM6gcHACDsl3Q/UraRWB4AzwP5K0YwWuiFpS6BuJbU6ADwFllWKZrTQkKTVgbqV1OoA8B2YUimaNgVgApO3as8kLY/Qb6laRwXEAPghaWrLLCIE/ncASMoaY1bj9o8xxsRUQAFQKqA8AmUOyDpPZTVeJsGyCpRlsPQBpREqnWBphcteIGK3WjZDZTNUNkPjfzP0E5gcOg+0wyPwFpg/kQHEnAu0xSoQcy5gC2eRpDehFdRKL+v7AGOMPQx93iqIFr+flHQi0kZD9WwAjDFLgSOAPRmOHSuBF5K+xRoaqe8NwBizEDgIrAdmpA4o0N4Q8DikUkIAvLLPZWCgudVOSzrk46TdANyT1JUbwHlgr4+TGmW7Jd3x8RdSAbOBJ8A8H0c1yN6StNHXjzcA96p7K3Dd11lGedtt2us0H3x9BAFwEA4Dp3wdZpJfK+lBiO1gAA7CRWB3iOOEOgcknQ21FwXAQbCTzrrQACL1+iXtirGRAsBcwEJYHBNIgO4jC16S3W4Hj2gArgpWAXcjLkP5JvAR6JL02ldxpHwSAA7CduBKbEAV9TdIul1RtqlYMgAOQi9wNEVgTWxETXrZKuCvYWPMAJDrducFSUm70KQV4KpgursbnPp+36Ck5KtNcgAOwgrANibTEj0OttOzM/77RPb+mckCwEHYCfQnCNh+Q2CTf5jA1igT2QA4COeAfZGB75B0OdJGQ/XcACa5R6EjMIE+SfZDi2wjKwBXBfbdoJ0PZnpmMSCpx1PHWzw7AAfBd/v8DuiQZDu+rKMWAA6CfUPcVzGbHkm2n8g+agPgINhVwa4OzcYlSXuyZ+4c1ArAQbA9fHeDBF9KqvplWRJGtQNwEOykuGZEBsOS5iTJysPImABwEK4B21ysNyVt9og7meiYAXAQ7CnTV0mfk2XkaWhMAXjGmkW8AMiCdRwZ/QOE/h1QnDTHpQAAAABJRU5ErkJggg==',
    top : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA5NJREFUeF7tm02oVVUUx3//JhEFUSOhRjWLRkkEjqwUNDJ4mCKEUA4ksJAizEkfNqmIUgQNkRJFiJTCr6IPKmc6aBBEgaaTKIigBqKDJv1jwX1ws+d9++xz9r6ezl2TN3hrrb3W7+yzzt577SsGLhp4/swATHMG2F4OLAXOSTo1jVimNgNsfwqsHkv6mKS52hCmAmCB5OfzPijpyZoQqgOw/TTw7oQk10r6uBaEqgBG7/w3CcndL+nbBL3WKtUA2L4b+A64JSHq74EVkn5P0G2lUgWA7RuBqPIrGkT7kaTHG+hnqdYCsA/YnBHhbklbM+ySTYoDsB0J7EqO6L+K2yW92cJ+omlRALZXAp8BN7RMYKOkwy19LGheDIDtO0bJ39tB4FeANZJSviCNhisJ4ENgfaNoJiufBx6V9FOHPstshmy/CrzSZaAjX58Dj0j6uyvfnc8A2xuBQ10FuICfvZK2dOW/UwC2lwGxybm1qwCv4ecFSW93MUZnAGwvAT4B7usisAQfc5KOJejV+QzaPgoUX7mNZfPLqB7EsjlbOpkBtt8AXsyOIt8wPourJf2V66I1ANtPAEUWKYlJ7ZMUW+wsaQXA9j3AF0AseqYpz0vamRNAWwAnY3GSM3ABm1gkRRFuJNkAbL8GvNRotLLKF4CHJf3cZJgsALYfA443GaiSbuN6kAsgqm8caV+PskpSLJmTpDGABud6SQEUUNoqaXeq3/8bgMvASklniwEIx7bXAauAuyYM9ABwU2ogi+jFecCPQPwNiYL361U2vwEXJX3ZZMzGMyDVue2bgZeBbak219D7Ic4VJAWAzqUYgPlIbf8J3NYi8v2Scg5Uk4asASAaHNEAzZUtkvbmGi9mVwPAESBqRq48KOl0rvFidjUAvAM8t1ggE/7fewBtzwdnAPr+CsxmQMsj8tjhfd2ihkw0rVEE286A6AgVuz/UBwAbJEWXqYj0AcAmSQeKZA9lWmPjwXbQJntG0p4hA9gm6a0hA9ghKQppEelDDeg9gO3A6y0eX+8BPAskn9EtAKr3ADYB7w15BmwAPhgygDXAiSEDeAj4asgAooPU5npb74vgDMBsBgz8FYhbJNHdyZXe14DbgT9yswf6DSAStx0NyyY/lhjndaekqxuhLXj+27T4bnAE4Cng/Yyoiz79iKcKgDEIcZ0tbpRNulV2CTgDnC15DjD/MKoByHj6VUxmAKpgvo4H+Qe0/jNQMKQz2QAAAABJRU5ErkJggg==',
    tidal_bottom :'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABC5JREFUeF7tm0uIHFUUhv9T3QtFXcVHQHx19UB0MGQTQRFMshAnQyLSVYEYmOmaJEiEiAYEiYIGEtwEoiEoTEhXeuEgVnUWg0azMYo7Xfkc0JmeJCZBN4KoZNR0HbndvRgnpPs+6tZoT9W2z3/Of74+fevWowkr/KAV3j8yBdA8vv2OVvHv+68PPVlwnMLlhRvx0/C26K8svpxMADRDz2fgFQBrZZpi8I9E9KpbjUOZeJMY6wBmT3gj5OC0jkkGjZSD6CMdrazGOoC50DsC4HlZQ0vi3nWDeLumVkqWAYDK5wCtl3KzJIiAT0pBvFFHK6uxDqAZer8zcJOsocVxAwFgLvRYp/mOhr9wg8ZD+vr+SusTYAKAgD9KQXxz/zb0I/7TAERbbhBb9Wg1uWjAZAJyAPkE5D+BfA3IF8H8LJCfBq2eqq0mz/cB+UYo3wnmW+H8WsDofkC+Fc63wvlWeAC2wlcA3KB702oQJmAGwJoVDED/ucBA3BIzeS4gABSZhu+ZiL7TnaB+OqsXQ816ZS0n9GU/E70+TxIcGNoZv2aSo5fWGoDvQ39dAbwfgG9qvkjOo1daC1+t2Tn9m2mupXplAOdr/gNXKdkH0FYAt6VtSCefeITWSvCpzqQoA5gLvW8ADOsYta0hwuFSNX5Rpc5AAQDhQ7cab7YKYDb0jhKwV6VIZrEOtrjj8fsq9ZQnYD70V7eYPyNCWaVQBrGn3CCuqNZRBtC5z+c/DfA7qsVsxRPRDK62Rkq7Tp1XraEFoAvhJYBfVy1oI94pOE/cN/beGZ3c2gDaEE5W3gLTHp3CKWpecIP4Dd18RgA6k+CJRWdU14CJjpgnSxONZ4xymIjbAOr+3UhYQHjQNJeSnujsz79g9JF9kbjc1j6MJ0BU/qHmP1Yg/kD3ZSgN9xcS4s1D1ca3Gtp/SVIB0FkPvACMmqkhGX1C9ORQNZqWie0XkxoAUWi2VjlIRC/3K2r4udGit7R2qgC6kzAFhpW3O5n4WLnaSHUXmjqAi/WnVv2ZFMS7wSm/30en3SBK/WyTOgAxBefq/sOthMXG5BbDcW/LmXmmWHRG7x2L5tPItziHFQCiQDOs7GbQZAqGF5hptDwRfZxCrmtSWAPQhlDz3mTCcybGiWhXqRqdMMnRS2sVAJ/dUGyeu1X8FDbpNMDMh8oTDfFHC2uHVQDC9Xzor0vQXg9uV+uCp9ygsUNNox5tHUD71Kh8+cxzcJxN7nh0Qb0lNUUmADqLorefgUNy9miHG0RTcrFmUZkB6EKYZGB3T8vEb7vVxrNmbcmrMwXQ/TlMA7zlOha/doNY6p9l8i32jswcQHsSTnpnmPH4YmsEulwKojvTakw2z7IA6O4R6kwY6xqN3CDeJms6zbhlAyCaEE+ZnAJ+vWs8upRmUyq5lhWAilFbsTkAW2T/L3n/AfuoaVAtqt/ZAAAAAElFTkSuQmCC',
    tidal_top : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABHlJREFUeF7tm0+I3FQcx7+/rCDqouhJqCBOZhSqJ4sIPVXbSrfsCmWSWpB2J1mRhdouLVJ7UVcvKuIfFqws2sm0CFKTWau2a2vR9WYPHpTSgs5k+k9BBD3I7sHayU+mS+taZiYvLy/Zmc7k+r7f359PXt4kLxlCjx/U4/2jD2A5Z0DFMdYQYRURftJHvSPLUcuyzQC/ZMyCMfRf03RYt9xNaUNYFgDVojFLtLT5xbYJOJCxvEKaEFIH4Dv5cYDeb9NkXre8mbQgpAqgcc1rwFxocwP8iL6t/H2oToEgNQAXSk/p/6D+AxiDAnWf4oH6uuy2T38X0MaSpAKgMjV0szZ46xEQrROulqisF1xDWC8pTAVAtZifJqJno9ZIhKlMwZuI6ouiTxyA7+QnAHo3SlHXaffqlvdGDH9ba6IAao65nsHHAGhxGgiYt+bs8kdxYrTyJgbg4gFzxSXGMTA/pKDwBQ6CkezYTPgvSMRkiQGolYxDzNgcsZ42cv4ZwLBulSvqYl65+VJ/VPYbk5qGl1VHZtBx/fyDG2lyMlAVWzmAmmNuZfBBVQU2ibNPt7ztquIrBXCuaKyuE2YB3KGqwGZxOMDz2THvLRU5lAE465h3B8BRgB9WUVhYDAZvylrlw2G6sHFlAPyi4YKQ+J3btYYYv4Boo265p8KabDeuBIDvGK8DeCFOIVJeprlgfn4ot/PLv6X8i4/g8Q6/ZDwNRiI3KSKVMWM6a3vjItpmmlgAKkVzpUb8FYAVsgUo8THv1u3yOzKxYgHwS8YXYAzLJFbuqdOw/ox7NGpcaQA1x3iVgRejJkxMz6higNbqo+6FKDmkANRK5pPM/FmURClpp3Ur2nogB8Ax5hhYk1JTkdIEzBtydvm4qCkyAOF9PdEKFOs04on7CuUp0bA3FgDCfMDB+pw1czIxAI3ANccwGdhAQKZVIgYeBXCLaCEhd2sLDD5DoIWGLiBUuY5fl3o0jX+rQ/Pvt9wTUXJGngGiwX88+MRtg8HtL4GxR9TTQnf6JqbN99rumZhxmtoTA3A1m+8YfwK4U7Z4Aj7IWF7kDVXRfGkAaLzgWCVaUBPddt3y9sXwt7WmAeATAKZsAwHwWM7yvpX1h/mSB1A03gZhV1ghrca7HkDc/cE+gG6/BPozIOYWOTOtzdruN7JrSJgv8UUw7gyAhpEkvx/qeADMtCVru4fCzqTseMcDAMPWbc+RbTDM1/EAiPi5TKH8XlgjsuOdDwC0J2O5b8o2GObreABBgFdyY95kWCOy430AsuREfb6T3wvQa6L663VdPwOqjrGDAOE9uhsOgO/kbYD29/IM2ELAxz0LoObkRxj0ec8COFc0H68Tf92zAOK+SOn6X4E+ANFP5FtcI/0Z0O23wueL5srLxKd7dhG8+KF516UB/qNnATQa90vmCTCL/1liCa3LGt3zwKj7vxehsjCb+RJ/GlwEYFhgFKMWnvQC2KgnFQDXIADj4CtflLX7quwvAn1XD/hkkvsAV09GagCinv209H0AaZHu1Dz/Aj6xslA5wAo/AAAAAElFTkSuQmCC',
}
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
        //清空子元素
        canvasArea.innerHTML = '';
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
            img.src = image64[`${flag?'tidal_':''}${type}`];
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