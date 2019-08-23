<template>
  <div class="mainview">
      <md-dialog-alert
      :md-active.sync="first"
      md-content="Your HTML Header Has Been Copied To Clipboard!"
      md-confirm-text="CLOSE" />
      <div class="toptitle md-display-3">
          {{ title }}
          <p id="topdesc" class="md-subheading">
              Quickly Create Clean, Effective Webpage Headers
          </p>
      </div>
      <div class="octologo ">
          <md-tooltip md-direction="left" md-delay="500">Contribute to this project!</md-tooltip>
          <img id="ol"  onclick="javascript:redir('github')" alt="github-octocat-logo" src="../assets/octo.svg" />
          
      </div>
      <!-- expected content insertion goes here -->
      <div class="cl cone md-elevation-8">
          <div class="cltitle">
              Choose JavaScript Libraries (Preset)
          </div><hr>
          <div class="clcon" style="overflow: scroll;">
              <md-checkbox v-model="sel" value=0><b>[Google API]</b> &nbsp; jQuery v3.4.1</md-checkbox><hr>
              <md-checkbox v-model="sel" value=1><b>[jQuery Code]</b> &nbsp; jQuery UI v1.12.1</md-checkbox><hr>
              <md-checkbox v-model="sel" value=2><b>[CDNJS]</b> &nbsp; D3 v5.9.7</md-checkbox><hr>
              <md-checkbox v-model="sel" value=3><b>[CDNJS]</b> &nbsp; Underscore.js v1.9.1</md-checkbox><hr>
              <md-checkbox v-model="sel" value=4><b>[CDNJS]</b> &nbsp; Moment.js v2.24.0</md-checkbox><hr>
              <md-checkbox v-model="sel" value=5><b>[ReactJS]</b> &nbsp; React v16</md-checkbox><hr>
              <md-checkbox v-model="sel" value=6><b>[ReactJS]</b> &nbsp; React DOM v16</md-checkbox><hr>
              <md-checkbox v-model="sel" value=7><b>[CDNJS]</b> &nbsp; Require.js v2.3.6</md-checkbox><hr>
              <md-checkbox v-model="sel" value=8><b>[jsDelivr]</b> &nbsp; Chart.js v2.8.0</md-checkbox><hr>
              <md-checkbox v-model="sel" value=9><b>[CDNJS]</b> &nbsp; AOS v2.3.4</md-checkbox><hr>
              <md-checkbox v-model="sel" value=10><b>[CDNJS]</b> &nbsp; TweenMax v2.3.1</md-checkbox><hr>
              <md-checkbox v-model="sel" value=11><b>[Bootstrap]</b> &nbsp; Bootstrap JS v4.3.1</md-checkbox><hr>
              <md-checkbox v-model="sel" value=12><b>[Materialize]</b> &nbsp; Materialize JS v1.0.0</md-checkbox><hr>
              <md-checkbox v-model="sel" value=13><b>[UIKit]</b> &nbsp; UIKit JS v3.1.7</md-checkbox><hr>
              <md-checkbox v-model="sel" value=14><b>[Foundation]</b> &nbsp; Foundation JS v6.5.3</md-checkbox><hr>
              <md-button @click="convertLib({ sel }, 'one', '.hha', 'js')" class="md-raised md-primary clbut">
                  Next Step
              </md-button>
              <br><br>
          </div>
      </div>
      <div class="cl ctwo md-elevation-8">
          <div class="cltitle">
              Choose CSS Libraries
          </div><hr>
          <div class="clcon" style="overflow: scroll;">
              <md-checkbox v-model="sel" value=0><b>[CDNJS]</b> &nbsp; Bulma v0.7.5</md-checkbox><hr>
              <md-checkbox v-model="sel" value=1><b>[Bootstrap]</b> &nbsp; Bootstrap CSS v4.0.0</md-checkbox><hr>
              <md-checkbox v-model="sel" value=2><b>[jsDelivr]</b> &nbsp; Foundation CSS v6.5.3</md-checkbox><hr>
              <md-checkbox v-model="sel" value=3><b>[Materialize]</b> &nbsp; Materialize CSS v1.0.0</md-checkbox><hr>
              <md-checkbox v-model="sel" value=4><b>[UIKit]</b> &nbsp; UIKit CSS v3.1.7</md-checkbox><hr>
              <md-checkbox v-model="sel" value=5><b>[CDNJS]</b> &nbsp; AOS CSS v2.3.4</md-checkbox><hr>
              <br><br>
          </div>
          <div class="clfot">
              <hr>
              <md-button @click="convertLib({ sel }, 'two', '.hpa', 'css')" class="md-raised md-primary clbut">
                  Next Step
              </md-button>
          </div>
      </div>
      <div class="cl cthree md-elevation-8">
          <div class="cltitle">
              Set Website Metadata
          </div><hr>
          <div class="clcon">
              <form novalidate class="md-layout fform" style="background-color: #f2f2f2;" @submit.prevent="validateUser">
                  <md-card style="background-color: #fafafa;" class="md-layout-item md-size-100 md-small-size-100">
                      <md-card-content>
                            <div class="md-layout-item md-small-size-100">
                            <md-field>
                                <label>Website Title</label>
                                <md-input v-model="wt"></md-input>
                            </md-field><br>
                            <md-field>
                                <label>Website Description</label>
                                <md-input v-model="wd"></md-input>
                            </md-field><br>
                            <md-field>
                                <label>Website Keywords</label>
                                <md-input v-model="wtags"></md-input>
                                <span class="md-helper-text">Seperate Using Comma</span>
                            </md-field><br>
                            <md-field>
                                <label>Google Bot - Revisit Interval</label>
                                <md-input v-model="wr"></md-input>
                                <span class="md-helper-text">Enter In Days</span>
                            </md-field>
                            </div>
                      </md-card-content>
                  </md-card>
              </form>
          </div>
          <div class="clfot">
              <hr>
              <md-button @click="addShit({ wt }, { wd }, { wtags }, { wr });" class="md-raised md-primary clbut">
                  Finalize &nbsp;&#x26;&nbsp; COPY
              </md-button>
          </div>
      </div>
    <div class="od md-elevation-8">
          <div class="odtitle">
              Your Website's HTML Head
          </div>
          <hr>
          <div class="codearea">
              <span id="green"> &lt;!-- HeaderSetter > Meta Content --&gt; </span> <br>
              <div class="hga">
                    &lt;meta charset="utf-8"&gt;<br>
                    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<br>
                    &lt;base href="/"&gt;<br>
                    &lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;<br>
                    &lt;link rel="icon" href="/favicon.ico"&gt;<br>
                    &lt;title&gt;<span class="klo"></span>&lt;/title&gt;<br> 
                    &lt;meta name="title" content="<span class='klo'></span>" /&gt; <br>
                    &lt;meta name="description" content="<span class='jlo'></span>" /&gt; <br>
                    &lt;meta name="keywords" content="<span class='nlo'></span>" /&gt; <br>
                    &lt;meta name="revisit-after" content="<span class='xlo'></span>" /&gt; 
              </div>
              <span id="green"> &lt;!-- HeaderSetter > JS Libraries --&gt; </span> <br>
              <div class="hha">
              </div>
              <span id="green"> &lt;!-- HeaderSetter > CSS Libraries --&gt; </span> 
              <div class="hpa">
              </div>
          </div>
      </div>
      <img id="sth" alt="chng theme" src="../assets/theme.svg" onclick="javascript:swthm('dark')" />
      <a href="/about" id="sths">About Header Setter </a>
      <div class="madewith">
                  Made with <span id="spew"><img class="hgy" alt="heart" src="../assets/octicon-heart.svg" /></span> by <a target="_blank" href="https://ryanwans.com?ref=hs" id="aa">Ryan Wans</a>
              </div>
        <script type="application/javascript">
            let redir = function(to) {
                (to === 'github') 
                    ? (function() { window.open("https://github.com/ryanrocket/hszeit", 'Header Setter - GitHub'); })() 
                    : (function() { console.error("invalid function input"); })
            },
            swthm = function(thm) {
                (thm === 'dark')
                    ? (function() {window.location.href="https://headersetter.us/dark"})()
                    : (function() {window.location.href="https://headersetter.us/light"})()
            }
        </script>
  </div>
</template>

<script>
console.log('Loaded Header Setter v1.6.5 [PRODUCTION MODE]');
import * as headset from '../assets/headset.js';
export default {
  name: 'Main',
  props: ['title', 'useExtHeadset'],
  data: () => ({
    sel: [],
    lib: Object.keys(headset.lib),
    csslib: Object.keys(headset.csslib),
    flib: "",
    wt: "",wd: "",wtags: "",wr: "",
    first: false,
    vvleft: "left",
    vvdur: "4000",
    vvsync: true
  }),
  methods: {
    onSelect (items) {
      this.sel = items
    },
    addShit(a,b,c,d) {
        // title content
        a=a.wt;
        b=b.wd;
        c=c.wtags;
        d=d.wr;
        // eslint-disable-next-line
        $('.klo').append(a);
        // eslint-disable-next-line
        $('.jlo').append(b);
        // eslint-disable-next-line
        $('.nlo').append(c);
        // eslint-disable-next-line
        $('.xlo').append(d);
        
        // make .codearea selection
        // eslint-disable-next-line
        /* eslint-disable */
        let ssld = $('.codearea').text();
        jQuery.fn.selectText = function(){
            this.find('input').each(function() {
                if($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) { 
                    $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this));
                }
                $(this).prev().html($(this).val());
            });
            var doc = document;
            var element = this[0];
            console.log(this, element);
            if (doc.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var selection = window.getSelection();        
                var range = document.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        };
        $('.codearea').selectText();
        document.execCommand('copy');
        this.first=true;

    },
    convertLib(ar, num, pp, tp) {
        ar = ar.sel
        let i, fs="";
        if (tp === 'css') {
            for(i = 0; i < ar.length; i++) {
                fs = fs + "&lt;link rel='stylesheet' href='" + Object.values(headset.csslib)[parseInt(ar[i])] + "' /><br>"
            }
        } else if (tp === 'js') {
            for(i = 0; i < ar.length; i++) {
                fs = fs + "&lt;script src='" + Object.values(headset.lib)[parseInt(ar[i])] + "'&gt;" + "&lt;" + "/script&gt;<br>"
            }
        }
        var parser = new DOMParser;
        var dom = parser.parseFromString(
        '<!doctype html><body>' + fs,
        'text/html');
        // eslint-disable-next-line
        var decodedString = dom.body.textContent;
        // eslint-disable-next-line
        $("<span id='ccode'>"+fs+"</span>").appendTo(pp);
        (num === 'one')
            // eslint-disable-next-line
            ? (function() {$('.cone').css('visibility', 'hidden');$('.ctwo').css('visibility', 'visible');})()
            : (num === 'two')
                // eslint-disable-next-line
                ? (function() {$('.ctwo').css('visibility', 'hidden');$('.cthree').css('visibility', 'visible');})()
                : (function() {})()
        this.sel = [];
    }
  },
  created() {

  }
};
console.log("%cHeader Setter is an Open Source Project! Check out the GitHub Below!", "font-size: 20px; color: teal;");
console.log("%chttps://github.com/ryanrocket/headersetter", "font-size: 16px; color: blue;");
console.log("\n"); console.log("%cHeader Setter is licensed under the MIT License\nProject by Ryan Wans [ ryanwans.com ]", "font-size: 16px; color: orange;")
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/theme.scss';
</style>

<!-- wow im in love with vue <3 -->
