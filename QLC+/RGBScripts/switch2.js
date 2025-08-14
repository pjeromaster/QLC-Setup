var testAlgo;
(
    function () {
        var algo = new Object;
        algo.apiVersion = 3;
        algo.name = "Switch2";
        algo.author = "Proxy";
        algo.acceptColors = 5;
        algo.colorArray = [ 0xff00ff , 0x00ff00, 0x000000, 0x000000, 0x000000];
        algo.properties = new Array();

        algo.delay = 0;
        algo.properties.push("name:delay|type:range|display:Delay|values:0,8|write:setDelay|read:getDelay");
        algo.setDelay = function (_delay) {algo.delay = Number(_delay);};
        algo.getDelay = function () { return algo.delay; };

        algo.rgbMapGetColors = function () {return algo.colorArray;}
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
        algo.getAvailableColors = function () {
            var colors = Array();
            for (var i = 0; i < algo.acceptColors; i++)
                if (algo.colorArray[i] > 0)
                    colors.push(algo.colorArray[i]);
            return colors;
        }
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
                algo.step++;
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
