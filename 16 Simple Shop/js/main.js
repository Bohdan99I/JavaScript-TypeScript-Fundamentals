var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var fakeApi = 'https://dummyjson.com/products';
var myApi = 'http://localhost:4400/api/products';
var list = document.querySelector('.product-list');
var loadBtn = document.querySelector('.load-btn');
var pagination = {
    skip: 0,
    limit: 50,
    next: function () {
        this.skip += this.limit;
    }
};
function loadProducts(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, products, _i, products_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url + "?skip=".concat(pagination.skip, "&limit=").concat(pagination.limit))];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    products = data.products;
                    pagination.next();
                    console.log(products);
                    if (list === null)
                        return [2 /*return*/];
                    for (_i = 0, products_1 = products; _i < products_1.length; _i++) {
                        i = products_1[_i];
                        list.innerHTML += "<div class=\"col\">\n                            <div class=\"card h-100\">\n                                <img src=\"".concat(i.thumbnail, "\" class=\"card-img-top\" alt=\"...\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(i.title, "</h5>\n                                    <p class=\"card-text\">").concat(i.price, "$ Rating: ").concat(i.rating, "</p>\n                                </div>\n                                <div class=\"card-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\">Add to Cart</button>\n                                    <button type=\"button\" class=\"btn btn-success\">Buy</button>\n                                </div>\n                            </div>\n                        </div>");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
if (loadBtn !== null) {
    loadBtn.onclick = function () {
        loadProducts(fakeApi);
    };
}
loadProducts(fakeApi);
