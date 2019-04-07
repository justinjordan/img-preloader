function ImgPreloader(src, callback) {
    callback = typeof callback === 'function' ? callback : function() {}

    var closure = function(resolve, reject) {
        if (!src || typeof src !== 'string') {
            throw new Error("ImgPreloader Error: expected first argument to be a URL")
        }

        var img = new Image()

        img.onload = function() {
            resolve(img)
            callback(img)
        }
        img.onerror = function() {
            var err = new Error("Failed to load image")

            reject(err)
            callback(null, err)
        }

        img.src = src
    }

    // Found Promise support
    if (typeof Promise !== 'undefined') {
        return new Promise(closure)
    }

    // If no support, rely on callback
    try {
        closure(function() {}, function() {})
    } catch(err) {
        callback(null, err)
    }
}

if (typeof module !== 'undefined') {
    module.exports = ImgPreloader
}
