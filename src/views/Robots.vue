<template>
    <script type="application/javascript">
        let window.robots = window.robots || {};
        window.robots['v'] = '1.2.9';
        window.document.getElementById('body').innerHTML = "User-Agent: *
        Disallow: 
        Allow: /
        Allow: /dark
        Allow: /about
        ";
        document.title="Robots.txt";
        window.robots['rendered'] = 'true';
    </script>
</template>

<style lang="sass" scoped>
@import '../assets/theme.scss'
</style>


<script>

export default {
  components: {
  },
};
</script>
