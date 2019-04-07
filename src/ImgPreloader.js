if (typeof Promise === 'undefined') {
    function Promise(closure) {
        var _this = this

        var thenCallback = function() {}
        var catchCallback = function() {}
        var finallyCallback = function() {}

        this.then = function(cb) {
            if (typeof cb === 'function') {
                thenCallback = function() {
                    cb.apply(_this, arguments)
                    finallyCallback.apply(_this)
                }
            }
            return _this
        }

        this.catch = function(cb) {
            if (typeof cb === 'function') {
                catchCallback  = function() {
                    cb.apply(_this, arguments)
                    finallyCallback.apply(_this)
                }
            }
            return _this
        }

        this.finally = function(cb) {
            if (typeof cb === 'function') {
                finallyCallback = cb
            }
            return _this
        }

        setTimeout(function() {
            if (typeof closure === 'function') {
                try {
                    closure(thenCallback, catchCallback)
                } catch (error) {
                    catchCallback(error)
                }
            }
        }, 0)
    }
}

function ImgPreloader(src, callback) {
    return new Promise((resolve, reject) => {
        if (!src || typeof src !== 'string') {
            throw new Error("ImgPreloader Error: expected first argument to be a URL")
        }

        const img = new Image()

        img.onload = () => {
            resolve(img)

            if (typeof callback === 'function') {
                callback(img)
            }
        }
        img.onerror = () => {
            const msg = "Failed to load image"

            reject(msg)

            if (typeof callback === 'function') {
                callback(null, msg)
            }
        }

        img.src = src
    })
}

window.ImgPreloader = ImgPreloader

export default ImgPreloader