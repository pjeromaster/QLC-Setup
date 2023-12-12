var testAlgo;
(
    function () {
        var algo = new Object;
        algo.apiVersion = 2;
        algo.name = "Switch";
        algo.author = "Proxy";

        algo.acceptColors = 2;

        algo.colorA = 0;
        algo.colorB = 0;

        algo.properties = new Array();
        algo.delay = 0;
        algo.totalSteps = 4;
        algo.properties.push("name:delay|type:range|display:Delay|values:0,8|write:setDelay|read:getDelay");



        algo.setDelay = function (_delay) {
            algo.delay = Number(_delay);
            algo.totalSteps = (1 + Number(_delay)) * 4;
        };

        algo.getDelay = function () {
            return algo.delay;
        };

        algo.rgbMap = function (width, height, rgb, step) {
            if (step === 0)
                algo.colorA = rgb;
            else if (step === algo.totalSteps - 1)
                algo.colorB = rgb;
            var map = new Array(height);

            if ((step % (algo.delay + 1)) > 0) {
                for (var y = 0; y < height; y++) {
                    map[y] = new Array();
                    for (var x = 0; x < width; x++) {
                        map[y][x] = 0
                    }
                }
            }
            else {
                var dif = Math.floor(step / (algo.delay+1));
                var i = dif % 2;
                for (var y = 0; y < height; y++) {
                    map[y] = new Array();
                    if (width % 2 === 0)
                        i++;
                    for (var x = 0; x < width; x++) {
                        if ((i % 2) === 0) {
                            if (step < 2) {
                                map[y][x] = algo.colorA;
                            } else {
                                map[y][x] = algo.colorB;
                            }

                        }
                        else {
                            map[y][x] = 0;
                        }
                        i++;
                    }
                }
            }
            return map;
        };

        algo.rgbMapStepCount = function (width, height) {
            return algo.totalSteps;
        };

        testAlgo = algo;
        return algo;
    }
)();
