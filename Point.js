"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
var Points = /** @class */ (function () {
    // private x:number;
    // public y:number;
    // public z:number;
    //If i use '?' then i don't get error eventhough i haven't provide the argument.
    //eventhough it is public asscess modififier mention it explicitly
    function Points(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log('X: ' + _this.x + ' Y: ' + _this.y + ' Z: ' + _this.z);
        };
        this.drawRec = function () {
            _this.draw();
            console.log("Draw Rectangle");
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Points.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Points;
}());
exports.Points = Points;
