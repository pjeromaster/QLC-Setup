var testAlgo;
(
    function () {
        var algo = new Object;
        algo.apiVersion = 1;
        algo.name = "Checkers";
        algo.author = "Proxy";

        algo.acceptColors = 2;
        algo.colorA = 0;
        algo.colorB = 0;
        algo.rgbMap = function (width, height, rgb, step) {
            var i = step % 2;
            if (i === 0)
                algo.colorA = rgb;
            else
                algo.colorB = rgb;
            var map = new Array(height);
            for (var y = 0; y < height; y++) {
                map[y] = new Array();
                if (width % 2 === 0)
                    i++;
                for (var x = 0; x < width; x++) {
                    if ((i % 2) === 0) {
                        map[y][x] = algo.colorA;
                    } else {
                        map[y][x] = algo.colorB;
                    }
                    i++;
                }
            }
            return map;
        };

        algo.rgbMapStepCount = function (width, height) {
            // Only two steps; one for even pixels and another for odd pixels
            return 2;
        };

        testAlgo = algo;
        return algo;
    }
)();
