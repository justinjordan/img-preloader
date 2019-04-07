# Img-Preloader

Simple image preloader that supports promises, callbacks, ES5, ES6, your emotional well-being... You name it!

## Install

```
npm i -S img-preloader
```

## Include

With Import:

```
import ImgPreloader from 'img-preloader'
```

Or using script tag:

```
<script src="path/to/img-preloader/dist/img-preloader.min.js"></script>
```

## Usage

```
// Promise
ImgPreloader('/myimage.jpg')
    .then(function(img) {
        // handle success
    })
    .catch(function(err) {
        // handle error
    })
    .finally(function() {
        // do something always
    })

// Or Callback
ImgPreloader('/myimage.jpg', function(img, err) {
    // do something
})
```
