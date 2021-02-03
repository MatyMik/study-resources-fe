import styled from 'styled-components';
// import colors from '../style/colors';

const Spinner = styled.div`

&:before,
&:after {
  border-radius: 50%;
}
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

&:before,
&:after {
  position: absolute;
  content: '';
}
&:before {
  width: 5.2em;
  height: 10.2em;
  background: #0dc5c1;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 2s infinite ease 1.5s;
  animation: load2 2s infinite ease 1.5s;
}
&:after {
  width: 5.2em;
  height: 10.2em;
  background: #0dc5c1;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 2s infinite ease;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


`;

export default Spinner;

// const CubeContainer = styled.div`
//     width: 40px;
//     height: 40px;
//     margin: 100px auto;
// `

// <div class="sk-cube-grid">
//   <div class="sk-cube sk-cube1"></div>
//   <div class="sk-cube sk-cube2"></div>
//   <div class="sk-cube sk-cube3"></div>
//   <div class="sk-cube sk-cube4"></div>
//   <div class="sk-cube sk-cube5"></div>
//   <div class="sk-cube sk-cube6"></div>
//   <div class="sk-cube sk-cube7"></div>
//   <div class="sk-cube sk-cube8"></div>
//   <div class="sk-cube sk-cube9"></div>
// </div>

// .sk-cube-grid {
//     width: 40px;
//     height: 40px;
//     margin: 100px auto;
//   }

//   .sk-cube-grid .sk-cube {
//     width: 33%;
//     height: 33%;
//     background-color: #333;
//     float: left;
//     -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
//             animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
//   }
//   .sk-cube-grid .sk-cube1 {
//     -webkit-animation-delay: 0.2s;
//             animation-delay: 0.2s; }
//   .sk-cube-grid .sk-cube2 {
//     -webkit-animation-delay: 0.3s;
//             animation-delay: 0.3s; }
//   .sk-cube-grid .sk-cube3 {
//     -webkit-animation-delay: 0.4s;
//             animation-delay: 0.4s; }
//   .sk-cube-grid .sk-cube4 {
//     -webkit-animation-delay: 0.1s;
//             animation-delay: 0.1s; }
//   .sk-cube-grid .sk-cube5 {
//     -webkit-animation-delay: 0.2s;
//             animation-delay: 0.2s; }
//   .sk-cube-grid .sk-cube6 {
//     -webkit-animation-delay: 0.3s;
//             animation-delay: 0.3s; }
//   .sk-cube-grid .sk-cube7 {
//     -webkit-animation-delay: 0s;
//             animation-delay: 0s; }
//   .sk-cube-grid .sk-cube8 {
//     -webkit-animation-delay: 0.1s;
//             animation-delay: 0.1s; }
//   .sk-cube-grid .sk-cube9 {
//     -webkit-animation-delay: 0.2s;
//             animation-delay: 0.2s; }

//   @-webkit-keyframes sk-cubeGridScaleDelay {
//     0%, 70%, 100% {
//       -webkit-transform: scale3D(1, 1, 1);
//               transform: scale3D(1, 1, 1);
//     } 35% {
//       -webkit-transform: scale3D(0, 0, 1);
//               transform: scale3D(0, 0, 1);
//     }
//   }

//   @keyframes sk-cubeGridScaleDelay {
//     0%, 70%, 100% {
//       -webkit-transform: scale3D(1, 1, 1);
//               transform: scale3D(1, 1, 1);
//     } 35% {
//       -webkit-transform: scale3D(0, 0, 1);
//               transform: scale3D(0, 0, 1);
//     }
//   }
