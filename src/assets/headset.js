// HeadSet.js by Ryan Wans
// Explicitly for Header Setter (.com)

// sort >-> commonomity

export let rev = {asof: '09:08:19', whenrev: 'latest', tilnext: undefined}
export let lib = {
    '[Google API] jQuery v3.4.1': 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    '[jQuery Code] jQuery UI v1.12.1': 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
    '[CDNJS] D3 v5.9.7': 'https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.7/d3.js',
    '[CDNJS] Underscore.js v1.9.1': 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js',
    '[CDNJS] Moment.js v2.24.0': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js',
    '[ReactJS] React v16': 'https://unpkg.com/react@16/umd/react.development.js',
    '[ReactJS] React DOM v16': 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
    '[CDNJS] Require.js v2.3.6': 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js',
    '[jsDelivr] Chart.js v2.8.0': 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',
    '[CDNJS] AOS v2.3.4': 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
    '[CDNJS] TweenMax v2.3.1': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js',
    '[Bootstrap] Bootstrap JS v4.3.1': 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
    '[Materialize] Materialize JS v1.0.0': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    '[UIKit] UIKit JS v3.1.7': 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/js/uikit.min.js',
    '[CDNJS] Foundation JS v6.5.3': 'https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/js/foundation.js',
}
export let csslib = {
    '[CDNJS] Bulma v0.7.5': 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css',
    '[Bootstap] Bootstrap CSS v4.0.0': "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    '[jsDelivr] Foundation CSS v6.5.3': 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css',
    '[Materialize] Materialize CSS v1.0.0': 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
    '[UIKit] UIKit CSS v3.1.7': 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.7/css/uikit.min.css',
    '[CDNJS] AOS CSS v2.3.4': 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css'
}
export function getlib(s) {
    return Object.values(lib)[parseInt(s)];
}

// requires upstream decode Object.keys / Object.values
export function assertOwn() {
    (window.dataLayer === undefined || window.dataLayer === null)
        ? (function() {
            window.dataLayer = [];
            window.dataLayer.push({hasGA: false, createdBy: 'asset headset', cause: 'forgotten/external error'});
            window.dataLayer.push({releaseStage: 'production'});
        })()
        : (function() {
            window.dataLayer.push({websiteTitle: 'Header Setter', author: 'Ryan Wans', latestversion: 'v1.6.5', releaseStage: 'production'});
        })()
}
console['log']("[ASSET] HeadSet.js was requested by Main.vue");