<template>
<svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39">
  <defs>
    <radialGradient id="mouse-graphic-events-a" cx="100%" cy="50%" r="97.147%" fx="100%" fy="50%" gradientTransform="matrix(-.06544 .51468 -.99786 -.03375 1.564 .002)">
      <stop offset="0%" stop-color="#FFF" stop-opacity="0"/>
      <stop offset="100%" stop-color="#FFF"/>
    </radialGradient>
    <linearGradient id="mouse-graphic-events-b" x1="46.686%" x2="46.935%" y1="100%" y2="0%">
      <stop offset="0%" stop-color="#FFF" stop-opacity="0"/>
      <stop offset="53.772%" stop-color="#FFF" stop-opacity=".396"/>
      <stop offset="83.539%" stop-color="#FFF" stop-opacity=".83"/>
      <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="mouse-graphic-events-c" x1="47.621%" x2="47.799%" y1="100%" y2="0%">
      <stop offset="0%" stop-color="#FFF" stop-opacity="0"/>
      <stop offset="48.693%" stop-color="#FFF" stop-opacity=".648"/>
      <stop offset="83.539%" stop-color="#FFF" stop-opacity=".83"/>
      <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="mouse-graphic-events-d" x1="46.686%" x2="46.935%" y1="100%" y2="0%">
      <stop offset="0%" stop-color="#FFF" stop-opacity="0"/>
      <stop offset="48.693%" stop-color="#FFF" stop-opacity=".648"/>
      <stop offset="83.539%" stop-color="#FFF" stop-opacity=".83"/>
      <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="mouse-graphic-events-e" x1="47.621%" x2="47.798%" y1="100%" y2=".662%">
      <stop offset="0%" stop-color="#FFF" stop-opacity="0"/>
      <stop offset="48.693%" stop-color="#FFF" stop-opacity=".648"/>
      <stop offset="83.539%" stop-color="#FFF" stop-opacity=".83"/>
      <stop offset="100%" stop-color="#FFF" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <g fill="none" fill-rule="evenodd" transform="translate(1)">
    <path fill="#FFF" d="M20.5516393,0 C23.313063,0 25.813063,1.11928813 27.6227071,2.92893219 C29.4323512,4.73857625 30.5516393,7.23857625 30.5516393,10 C30.5516393,10.3334563 30.5349603,10.6667039 30.5016649,10.9984938 L29.7432422,18.5562023 L30.3195286,27.4573295 C30.5129635,30.4450598 29.4770689,33.228347 27.6458831,35.3130602 C25.8146972,37.3977735 23.18822,38.7839129 20.2004896,38.9773478 C19.9672982,38.9924453 19.7336796,39 19.5,39 C16.5060144,39 13.7954692,37.7864476 11.8334204,35.8243987 C9.87137156,33.8623499 8.65781913,31.1518047 8.65781913,28.1578191 C8.65781913,27.9241395 8.66537382,27.6905209 8.68047135,27.4573295 L9.2558415,18.5703546 L8.31615505,11.2780295 C7.96323696,8.53925054 8.75383908,5.91670327 10.3173655,3.89062121 C11.8808918,1.86453915 14.2173425,0.434922289 16.9561214,0.0820041993 C17.3799415,0.0273908874 17.8068265,0 18.2341508,0 L20.5516393,0 Z M20.5516393,1 L19.9990502,1 L20,17.5 C20,17.7761424 19.7761424,18 19.5,18 C19.2238576,18 19,17.7761424 19,17.5 L18.9990502,1 L18.2341508,1 C17.8495589,1 17.4653624,1.0246518 17.0839243,1.07380378 C12.2421545,1.69771255 8.79750036,6.06054018 9.27784619,10.88655 L9.30795463,11.1502265 L10.26,18.5384615 L9.67838208,27.5219373 C9.66467703,27.7336209 9.65781913,27.9456923 9.65781913,28.1578191 C9.65781913,33.5935055 14.0643136,38 19.5,38 C19.7121268,38 19.9241982,37.9931421 20.1358818,37.9794371 C25.4682738,37.6342016 29.533019,33.1037342 29.3356433,27.7970934 L29.3216179,27.5219373 L28.74,18.5384615 L29.5066623,10.8986444 C29.5366282,10.6000335 29.5516393,10.3001107 29.5516393,10 C29.5516393,5.02943725 25.522202,1 20.5516393,1 Z"/>
    <path fill="#FFF" d="M19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,11.5 C21,12.3284271 20.3284271,13 19.5,13 C18.6715729,13 18,12.3284271 18,11.5 L18,4.5 C18,3.67157288 18.6715729,3 19.5,3 Z"/>
    <path v-if="leftShoulder" fill="url(#mouse-graphic-events-a)" fill-opacity=".2" stroke="#FFF" stroke-width=".5" d="M9.2,27 L9.5,22 L9.8,18 L9,14 L9,8 C3.75329488,8 0,12.2532949 0,17.5 C0,22.7467051 3.95329488,27 9.2,27 Z"/>
    <path v-if="rightShoulder" fill="url(#mouse-graphic-events-a)" fill-opacity=".2" stroke="#FFF" stroke-width=".5" d="M38.2,27 L38.5,22 L38.8,18 L38,14 L38,8 C32.7532949,8 29,12.2532949 29,17.5 C29,22.7467051 32.9532949,27 38.2,27 Z" transform="matrix(-1 0 0 1 67.8 0)"/>
    <g transform="translate(8 1)">
      <g v-if="rightClick" fill-opacity=".5" transform="translate(1)">
        <path fill="url(#mouse-graphic-events-b)" d="M2,16 C3,18 3,23 6,23 C8,23 9.33333333,21 10,17 L10,0 C4.66666667,0 1.33333333,2.66666667 0,8 C0.666666667,11.3333333 1.33333333,14 2,16 Z"/>
        <path fill="url(#mouse-graphic-events-c)" d="M6.83589941,18.3905996 C6.6129929,18.7249594 6.36842105,19 6,19 C5.13509849,17.997822 4.9118605,16.8560625 4.66000497,15.8347756 C4.41712442,14.8498827 4.17010757,13.9311587 3.85958358,13.2534464 C3.25623479,11.4194797 1.60314765,9.96032541 1,7 C1,5 1.72648737,3.0188101 3,2 C3.90067287,1.27946171 6.73784483,0.222552394 8,1.13686838e-13 L8,14.8313789 C7.72934343,16.3942279 7.3677592,17.5928099 6.83589941,18.3905996 Z"/>
      </g>
      <polygon fill="#FFF" points="1 11 0 12 1 16 .5 20 2 21 2 16"/>
    </g>
    <g transform="translate(20 1)">
      <g v-if="leftClick" fill-opacity=".5">
        <path fill="url(#mouse-graphic-events-d)" d="M8,16 C7,18 7,23 4,23 C2,23 0.666666667,21 0,17 C0,14.5555556 0,12.2222222 0,10 C0,7.77777778 0,4.44444444 0,0 C5.33333333,0 8.66666667,2.66666667 10,8 C9.33333333,11.3333333 8.66666667,14 8,16 Z"/>
        <path fill="url(#mouse-graphic-events-e)" d="M7.83589941,18.3905996 C7.6129929,18.7249594 7.36842105,19 7,19 C6.13509849,17.997822 5.9118605,16.8560625 5.66000497,15.8347756 C5.41712442,14.8498827 5.17010757,13.9311587 4.85958358,13.2534464 C4.25623479,11.4194797 2.60314765,9.96032541 2,7 C2,5 2.72648737,3.0188101 4,2 C4.90067287,1.27946171 7.73784483,0.222552394 9,0 L9,14.8313789 C8.72934343,16.3942279 8.3677592,17.5928099 7.83589941,18.3905996 Z" transform="matrix(-1 0 0 1 11 0)"/>
      </g>
      <polygon fill="#FFF" points="10 11 9 12 10 16 9.5 20 11 21 11 16" transform="matrix(-1 0 0 1 20 0)"/>
    </g>
  </g>
</svg>

</template>

<script>
export default {
  name: 'iconMouseClick',
  props: {
    leftHanded: Boolean,
    rightHanded: Boolean,
    leftClick: Boolean,
    leftShoulder: Boolean,
    rightClick: Boolean,
    rightShoulder: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
