
function showQRLightbox(data, title, protocol) {
    var defaultTemplate = '<div class="lightbox qr-lightbox">'
        + '<a href="{{link}}" target="_blank"><div class="qrcode"></div>'
        + '<h4>{{title}}</h4></a><input value="{{data}}" readonly /></div>';
    var template = $('#qr-lightbox-template').html() || defaultTemplate;
    var link = (protocol ? protocol + ':' + data : '#');
    var html = template
                .replace(/{{title}}/g, title ? title : '')
                .replace(/{{data}}/g, data)
                .replace(/{{link}}/g, link);
    $.featherlight.defaults.afterOpen = function() {
        var qrcode = this.$instance.find('.qrcode').get(0);
        new QRCode(qrcode, data);
    };
    $.featherlight(html);
}
