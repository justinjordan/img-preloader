# Image Preloader

Simple image preloader that supports promises, callbacks, ES5, ES6, your emotional well being... You name it!

## Install

```
npm i -S img-preloader
```

## Usage

```
import ImgPreloader from 'img-preloader'

ImgPreloader('/myimage.jpg')
    .then(result => {
        // handle success
    })
    .catch(err => {
        // handle error
    })
    .finally(() => {
        // do something always
    })
```

## Usage (ES5)

```
<script src="path/to/img-preloader/dist/img-preloader.js"></script>
<script>
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
</script>
```