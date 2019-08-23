<template>
  <div class="mainview">
    <div class="toptitle md-display-3">
          <span onclick="javascript:(function(){window.location.href='/'})()">Header Setter</span>
          <p id="topdesc" class="md-subheading">
              Quickly Create Clean, Effective Webpage Headers
          </p>
      </div>
    <div class="octologo ">
          <md-tooltip md-direction="left" md-delay="500">Contribute to this project!</md-tooltip>
          <img id="ol"  onclick="javascript:redir('github')" alt="github-octocat-logo" src="../assets/octo.svg" />
          
      </div> 

    <div class="mcon">
      Header Setter is modern web application for developers to easily create clean, efficient HTML Head's
      for their webpages. HS allows developers to eaily choose between many modern-day JS and CSS frameworks
      and libraries such as React CDN, Bootstrap JS &amp; CSS, and jQuery. We also include a UI for developers
      to set custom meta data for their webpage such as the title, description, keywords, and google bot checks
      in order to improve the SEO of their webpage. HS organizes all of the packages in the head to that the
      heavier dependencies (such as jQuery) load first. We also make sure your libraries come from the fastest
      CDN source, such as jsDelivr, CDNJS, and Google API. <br><br>
      Header Setter is an Open Source project created by <a href="https://ryanwans.com" target="_blank">Ryan Wans</a>
      just for fun. Feel free to help out by commiting some changes to the git repository linked above.
    </div>
    
    <img id="sth" alt="chng theme" src="../assets/theme.svg" onclick="javascript:swthm('dark')" />
      <a href="/" id="sthss">Go Home </a>
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

<style lang="sass" scoped>
@import '../assets/theme.scss'
</style>


<script>
import Main from '../components/Main';

export default {
  components: {
    Main,
  },
};
</script>