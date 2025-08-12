var testAlgo;
(
    function () {
        var algo = new Object;
        algo.apiVersion = 3;
        algo.name = "Switch2";
        algo.author = "Proxy";
        algo.acceptColors = 5;
        algo.colorArray = [ 0xFF0000, 0xFFFF00, 0x00FF00, 0x00FFFF, 0x0000FF ];
        algo.properties = new Array();

        algo.use1 = 1;
        algo.setUse1 = function (value) { algo.use1 = value === "Yes" ? 1 : 0; };
        algo.getUse1 = function () { return algo.use1 === 1 ? "Yes" : "No"; };
        algo.properties.push("name:Use1|type:list|display:Use Color 1|values:No,Yes|write:setUse1|read:getUse1");

        algo.use2 = 1;
        algo.setUse2 = function (value) { algo.use2 = value === "Yes" ? 1 : 0; };
        algo.getUse2 = function () { return algo.use2 === 1 ? "Yes" : "No"; };
        algo.properties.push("name:Use2|type:list|display:Use Color 2|values:No,Yes|write:setUse2|read:getUse2");

        algo.use3 = 1;
        algo.setUse3 = function (value) { algo.use3 = value === "Yes" ? 1 : 0; };
        algo.getUse3 = function () { return algo.use3 === 1 ? "Yes" : "No"; };
        algo.properties.push("name:Use3|type:list|display:Use Color 3|values:No,Yes|write:setUse3|read:getUse3");

        algo.use4 = 1;
        algo.setUse4 = function (value) { algo.use4 = value === "Yes" ? 1 : 0; };
        algo.getUse4 = function () { return algo.use4 === 1 ? "Yes" : "No"; };
        algo.properties.push("name:Use4|type:list|display:Use Color 4|values:No,Yes|write:setUse4|read:getUse4");

        algo.use5 = 1;
        algo.setUse5 = function (value) { algo.use5 = value === "Yes" ? 1 : 0; };
        algo.getUse5 = function () { return algo.use5 === 1 ? "Yes" : "No"; };
        algo.properties.push("name:Use5|type:list|display:Use Color 5|values:No,Yes|write:setUse5|read:getUse5");

        algo.delay = 0;
        algo.properties.push("name:delay|type:range|display:Delay|values:0,8|write:setDelay|read:getDelay");
        algo.setDelay = function (_delay) {
            algo.delay = Number(_delay);
            // algo.totalSteps = (1 + Number(_delay)) * 4;
        };

        algo.getDelay = function () { return algo.delay; };

        algo.rgbMapSetColors = function (rawColors) {
            if (!Array.isArray(rawColors))
                return;
            algo.colorArray = Array();
            for (var i = 0; i < algo.acceptColors; i++) {
                var isNumber = (rawColors[i] === rawColors[i]);
                var color = rawColors[i];
                if (i < rawColors.length && isNumber) {
                    algo.colorArray.push(color);
                }
            }
        };
        algo.createNewMap = function(width,height){
            // var map = new Array(height);
            // for (var y = 0; y < height; y++)
            //     map[y] = new Array(width);
            // return map;
            return algo.createCheckerMap(width,height,0,0);
        };

        algo.createCheckerMap = function (width, height, colorA,colorB) {
            var map = new Array(height);
            for (var y = 0; y < height; y++) {
                map[y] = new Array();
                for (var x = 0; x < width; x++) {
                    if (((x+y) % 2) === 0) {
                        map[y][x] = colorA;
                    } else {
                        map[y][x] = colorB;
                    }
                }
            }
            return map;
        };
        algo.getAvailableColors = function(){
            var colors = Array();
            if(algo.use1) colors.push(algo.colorArray[0]);
            if(algo.use2) colors.push(algo.colorArray[1]);
            if(algo.use3) colors.push(algo.colorArray[2]);
            if(algo.use4) colors.push(algo.colorArray[3]);
            if(algo.use5) colors.push(algo.colorArray[4]);
            return colors;
        }

        algo.rgbMapGetColors = function () {return algo.colorArray;}
        algo.step = 0;
        algo.stepdelay = 0;
        algo.rgbMap = function (width, height, rgb, progstep) {
            if (algo.stepdelay >= algo.delay)
                algo.stepdelay = algo.delay-1;
            if(algo.stepdelay > 0){
                algo.stepdelay --;
                return algo.createNewMap(width,height);
            }
            algo.stepdelay = algo.delay-1;
            var colors = algo.getAvailableColors();
            var colorA = 0;
            var colorB = 0;
            if(colors.length === 0) return algo.createNewMap(width,height);
            
            if(colors.length === 1){
                if((algo.step%2) === 0)
                    colorA = colors[0];
                else colorB = colors[0];
            }
            else if(algo.delay === 0){
                if(algo.step >= colors.length) algo.step = 0;
                if(algo.step === 0){
                    colorA = colors[0];
                    colorB = colors[colors.length -1];
                }
                else{
                    colorA = colors[algo.step];
                    colorB = colors[algo.step-1];
                }
                algo.step++;
            }
            else{
                if(algo.step >= 2 * colors.length) algo.step = 0;
                var col = colors[Math.floor(algo.step/2)];
                if(algo.step%2 === 0) colorA = col;
                else colorB = col;
                algo.step++;
            }
            return  algo.createCheckerMap(width,height,colorA,colorB);
        };

        algo.rgbMapStepCount = function (width, height) {
            return 2;
        };

        testAlgo = algo;
        return algo;
    }
)();
