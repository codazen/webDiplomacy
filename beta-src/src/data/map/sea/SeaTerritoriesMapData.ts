import TerritoryMapDataGenerator from "../../../classes/map/TerritoryMapDataGenerator";
import { TerritoryMapData } from "../../../interfaces";
import Territory from "../../../enums/Territory";
import TerritoryDataGenerator from "../../../classes/TerritoryDataGenerator";
import Texture from "../../../enums/Texture";

export const GULF_OF_BOTHNIA: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.GULF_OF_BOTHNIA).get(),
  labels: [
    {
      x: 112,
      y: 340,
    },
  ],
  width: 362,
  height: 462,
  x: 3095,
  y: 993,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M358.36 286.692C351.048 282.222 343.01 279.067 334.61 277.369C330.45 276.519 325.89 275.879 322.95 272.808C319.07 268.806 319.68 262.314 320.54 256.803C320.64 256.183 320.78 255.582 320.91 254.972C315.19 258.973 309.53 262.975 303.29 266.046C294.68 270.267 285.24 272.448 276.11 275.399C246.22 285.062 218.11 303.407 186.69 303.177C184.31 303.177 181.77 302.987 179.86 301.557C178.757 300.576 177.753 299.491 176.86 298.315C174.42 295.605 170.95 294.104 167.6 292.684L135.29 278.97C132.85 277.969 130.29 276.789 128.8 274.588C127.975 273.193 127.415 271.656 127.15 270.057C126.316 266.631 125.837 263.128 125.72 259.604C125.59 248.46 131.31 238.057 132.6 226.994C134 214.99 130.12 203.066 127.19 191.333C124.26 179.599 122.31 166.765 127.27 155.732C129.281 151.686 131.729 147.872 134.57 144.358L163.33 106.017C167.61 100.325 170.23 97.294 174.84 91.8524C181.5 83.9899 184.5 73.6368 190.44 65.2042C195.04 58.6822 201.27 53.4805 206.11 47.1386C210.95 40.7966 214.41 32.5341 212.11 24.8818C210.49 19.4001 206.11 15.0788 201.25 12.0979C196.39 9.11697 190.89 7.26641 185.6 5.09574C182.45 3.78534 179.33 2.31492 176.29 0.684418C177.89 0.564381 179.5 0.454299 181.1 0.384277C173.175 0.726162 165.288 1.6827 157.51 3.2452C154.849 3.66901 152.265 4.48122 149.84 5.65591C145.93 7.73655 143.13 11.3977 140.58 15.0388C132.71 26.2522 125.77 38.9661 125.77 52.6603C125.77 62.7734 130.77 72.4063 127.32 81.9193C123.05 93.7629 113.91 103.076 105.03 111.999L93.1499 123.922C89.7899 127.303 86.38 130.714 82.33 133.225C79.97 134.695 77.41 135.836 75.02 137.226C72.6587 138.671 70.4152 140.3 68.31 142.098C57.8945 150.835 49.5992 161.825 44.05 174.238C40.05 183.15 37.5898 192.633 35.1298 202.066C33.7298 207.398 29.67 211.719 28.82 217.171C27.4608 225.963 26.6193 234.828 26.3 243.719C26.06 250.351 26.1699 257.223 28.9399 263.255C31.9399 269.847 37.79 274.638 43.27 279.39C52.27 287.182 61.1499 296.165 63.9499 307.718C65.9499 315.881 64.6 324.594 61.59 332.446C58.58 340.298 53.99 347.451 49.28 354.393C46.35 358.714 43.28 363.065 39.28 366.396C30.75 373.399 18.0599 375.079 7.15986 376.96L2.05 377.85C1.68625 377.874 1.33804 378.006 1.05 378.23C0.796659 378.505 0.641961 378.857 0.610054 379.23C0.22759 381.58 0.780212 383.986 2.14985 385.932C2.84985 386.933 3.73986 387.743 4.40986 388.743C7.29986 393.055 5.78995 399.817 8.24995 404.388C7.70995 405.108 7.24993 405.848 6.72993 406.609C51.4399 422.333 96.4399 437.898 143.15 445.831L143.51 445.891C144.3 444.06 145.09 442.23 145.9 440.419C147.6 436.578 149.48 432.567 152.9 430.146C157.59 426.835 164.18 427.395 169.28 430.036C174.38 432.677 178.34 437.038 182.17 441.339L195.73 456.514C197.071 458.246 198.779 459.66 200.73 460.655C205.63 462.726 211 459.125 214.73 455.384C217.541 452.369 219.525 448.678 220.49 444.67C221.427 440.674 221.887 436.581 221.86 432.477L222.7 407.469C222.79 404.908 222.85 402.227 221.77 399.897C220.603 397.744 218.875 395.946 216.77 394.695C209.77 389.914 200.77 387.193 196.15 380.011C192.66 374.579 192.49 367.667 193.15 361.245C193.89 354.243 196 347.241 200.54 341.909L200.62 341.999H200.82C201.95 339.318 204.75 337.798 207.35 336.497L220.54 329.865C223.665 328.172 226.939 326.769 230.32 325.674C233.644 324.807 237.049 324.288 240.48 324.123C255.522 323.032 270.641 323.842 285.48 326.534C292.48 327.815 300.48 329.275 306.07 324.854C312.99 319.372 312.43 307.488 319.86 302.717C323.74 300.226 328.77 300.446 333.03 298.716C337.29 296.985 341.09 293.024 345.83 292.834C348.83 292.714 351.83 294.194 354.83 293.834C356.219 293.646 357.53 293.08 358.619 292.198C359.709 291.316 360.536 290.152 361.01 288.833C360.84 287.492 359.49 287.382 358.36 286.692Z",
}).get();

export const BLACK_SEA: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.BLACK_SEA).get(),
  labels: [
    {
      x: "30%",
      y: "58%",
    },
  ],
  unitSlot: {
    x: "30%",
    y: "58%",
  },
  width: 605,
  height: 1027,
  x: 1827,
  y: 1603,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M595.27 345.597C597.27 339.845 596.62 319.238 595.27 314.837C589.69 310.636 586.4 303.914 583.43 297.502C580.87 291.98 578.27 286.308 577.83 280.247C577.39 274.375 579.01 268.443 578.1 262.621C577.489 259.361 576.39 256.211 574.84 253.278C566.95 237.273 553.94 224.519 540.76 212.536C538.39 210.385 535.94 208.204 532.98 206.994C529.963 205.927 526.766 205.461 523.57 205.624C522.08 205.624 520.57 205.624 519.11 205.624C515.47 205.624 511.94 205.274 508.88 203.403C502.73 199.662 501.31 191.499 500.51 184.337C503.501 184.201 506.379 183.156 508.759 181.339C511.139 179.523 512.909 177.023 513.83 174.174C514.69 171.353 514.74 168.112 516.68 165.882C516.74 165.801 516.83 165.741 516.9 165.661C495.06 154.928 460.67 138.883 444.23 130.741C419.23 118.357 354.58 63.9603 330.35 46.9951C306.12 30.03 244.74 1.7613 157.52 0.98106C151.96 0.98106 146.61 0.90107 141.44 0.891067C74.2599 0.811043 38.79 4.80227 0.900024 18.4064V1025.8C6.22866 1015.75 10.8337 1005.32 14.6801 994.605C17.0801 987.943 19.18 981.151 22.02 974.659C28.15 960.605 38.02 947.831 51.24 940.149C54.67 938.148 58.32 936.507 61.38 934.007C63.8383 931.859 66.0487 929.443 67.97 926.804C74.43 918.532 80.81 910.009 89.16 903.647C97.8 897.065 108.16 893.114 118.61 890.143C132.529 886.188 146.85 883.816 161.3 883.071C172.11 882.511 183.3 882.801 193.3 878.71C204.18 874.268 212.38 865.195 220.19 856.413C233.76 841.148 247.3 826.404 260.75 811.069C265.92 805.147 271.45 798.995 278.89 796.474C279.622 796.195 280.268 795.727 280.762 795.117C281.255 794.508 281.579 793.778 281.7 793.003C281.895 791.411 281.935 789.803 281.82 788.202C281.829 785.783 282.361 783.394 283.38 781.2C283.38 781.2 283.5 781.07 283.38 781.03C281.51 780.449 279.739 779.585 278.13 778.469C274.63 776.308 271.06 774.068 268.58 770.797C265.18 766.325 264.24 760.454 264.07 754.792C263.9 749.13 264.37 743.498 263.36 737.977C261.69 728.894 257.47 719.751 250.13 714.139L242.86 708.578C240.08 706.447 237.18 704.266 233.77 703.446C232.461 703.135 231.115 703.007 229.77 703.066C224.35 703.146 218.85 705.707 213.33 705.747C212.92 705.747 212.52 705.747 212.12 705.697C208.71 705.397 205.48 703.966 202.12 703.546C200.281 703.477 198.45 703.249 196.65 702.866C194.08 702.096 192.06 700.145 189.98 698.435C186.869 695.868 183.441 693.713 179.78 692.023C177.711 691.222 175.739 690.192 173.9 688.952C172.983 688.325 172.225 687.494 171.685 686.523C171.145 685.553 170.839 684.469 170.79 683.36C170.891 682.183 171.231 681.039 171.79 679.999C176.09 670.786 185.45 663.524 185.87 653.361C186.02 649.93 185.08 646.498 185.43 643.077C185.87 638.696 188.35 634.825 189.94 630.714C191.53 626.603 191.88 621.131 190.09 617.1C188.18 612.788 181.8 613.038 178.28 609.887C176.901 608.537 175.904 606.846 175.39 604.986C172.7 596.603 175.55 587.551 178.39 579.208C179.71 575.337 181.1 571.326 183.92 568.365C188.58 563.483 195.92 562.553 201.92 559.462C210.11 555.221 215.46 547.088 220.11 539.116C233.745 515.74 244.576 490.837 252.38 464.923C254.097 459.683 255.306 454.29 255.99 448.818C256.49 443.817 256.88 437.115 261.08 434.304C263.402 422.787 264.289 411.028 263.72 399.293C263.53 395.292 263.17 391.291 264.13 387.379C265.103 383.737 267.168 380.481 270.046 378.047C272.924 375.613 276.478 374.119 280.23 373.765C280.67 373.765 281.11 373.765 281.55 373.765C285.01 373.765 288.44 374.635 291.88 375.055C292.981 375.191 294.09 375.261 295.2 375.266C298.281 375.483 301.346 374.666 303.91 372.945C305.91 371.424 307.32 369.174 309.2 367.463C313.2 363.862 318.88 363.102 324.2 362.462C325.15 362.352 326.12 362.252 327.08 362.232C328.007 362.209 328.932 362.314 329.83 362.542C331.576 363.127 333.21 364.007 334.66 365.143C339.39 368.434 344.17 371.765 347.98 376.146C349.79 378.147 351.39 380.487 353.58 382.148C355.733 383.593 358.094 384.703 360.58 385.439L389.3 395.592C394.187 397.22 398.987 399.099 403.68 401.224C409.191 403.759 414.562 406.587 419.77 409.696L428.83 415.228C432.309 417.468 435.949 419.448 439.72 421.15C448.8 424.961 459.08 425.461 467.89 429.872C474.89 433.373 480.89 439.295 488.53 440.736C492.16 441.416 495.9 441.036 499.53 441.376C506.193 442.027 512.408 445.022 517.07 449.828C517.995 450.901 518.998 451.904 520.07 452.829C521.477 453.831 523.038 454.598 524.69 455.1C529.108 456.794 533.738 457.871 538.45 458.301H538.5C538.62 458.301 538.72 458.301 538.83 458.301C555.19 447.087 563.06 437.104 571.54 417.709C580.02 398.313 583.66 399.233 583.66 399.233L581.54 393.171C575.74 376.606 592.67 361.401 593.88 360.341L603.26 362.272L603.17 362.172L603.65 362.272C603.65 362.272 593.29 351.368 595.27 345.597Z",
}).get();

export const ENGLISH_CHANNEL: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.ENGLISH_CHANNEL).get(),
  labels: [
    {
      x: 232,
      y: 52,
    },
  ],
  width: 349,
  height: 123,
  x: 2248,
  y: 1675,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M334.06 15.0073C333.42 15.8082 332.677 16.5212 331.85 17.1279C322.5 24.1301 309.95 24.6603 298.26 24.7803C285.86 24.9103 272.44 24.5902 262.62 17.0079C260.361 15.2194 258.344 13.1447 256.62 10.836C242.28 9.21547 227.52 11.3862 213.07 10.0058C202.93 9.00545 194.25 1.90327 184.16 0.502838C181.868 0.0894563 179.508 0.261487 177.3 1.00299C175.512 1.80738 173.859 2.88373 172.4 4.19391L162.66 12.1064C161.19 13.2967 159.6 14.5372 157.66 14.6372C155.11 14.7772 153.01 12.8066 151 11.2261C146.61 7.84811 141.376 5.74165 135.87 5.13658C130.365 4.53152 124.799 5.45117 119.78 7.79511C115.1 10.0658 110.33 13.6968 105.27 12.4565C101.27 11.4562 98.42 7.61497 94.96 5.45431C91.98 6.46128 89.0034 7.49169 86.03 8.54535C57.0443 18.8083 28.6652 30.711 1.03003 44.1962C10.23 50.6982 18.2999 55.9398 24.1799 58.8407C40.6199 66.9832 75.0101 83.0281 96.8501 93.7614C96.7801 93.8415 96.6899 93.9015 96.6299 93.9815C98.4499 91.8708 101.43 91.2706 104.2 90.9806C112.08 90.1096 120.051 90.6311 127.75 92.5211C129.943 93.1895 132.21 93.586 134.5 93.7015C136.85 93.7015 139.12 92.9412 141.43 92.5611C149.76 91.1907 159.55 96.0521 160.91 104.385C177.547 109.218 193.849 115.139 209.71 122.11C203.99 114.108 208.71 103.104 208.64 93.2413C208.57 82.9381 202.98 72.825 205.08 62.7419L218.24 63.002C220.09 63.002 222.04 63.102 223.6 64.1023C225.87 65.5428 226.6 68.4537 227.33 71.0345C229.25 77.7466 232.57 84.1985 237.7 88.92C242.83 93.6414 249.57 96.3423 256.33 95.6821C256.33 95.9421 256.23 96.2122 256.19 96.4722C256.37 96.4722 256.55 96.3822 256.73 96.3622C261.05 95.672 265.41 96.9024 269.73 97.2225C273.852 97.5211 277.992 97.0149 281.92 95.732C282.07 94.0515 279.83 93.4214 278.57 92.311C277.06 90.9606 276.99 88.4999 277.92 86.6993C278.98 84.9573 280.504 83.5442 282.32 82.618C285.401 80.8128 288.744 79.4999 292.23 78.7268C301.41 76.7262 311.97 78.2367 319.34 72.3949C321.95 70.3243 323.87 67.4934 326.34 65.2627C328.261 63.6689 330.264 62.1764 332.34 60.7914C332.02 60.5113 331.69 60.2411 331.34 59.951C333.05 54.4393 335.02 48.9477 337.24 43.6661C338.56 40.5051 340.06 37.2641 342.7 35.0934C344.289 33.8503 346.107 32.9326 348.05 32.3926L336 17.298C335.39 16.5178 334.75 15.7375 334.06 15.0073Z",
}).get();

export const IRISH_SEA: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.IRISH_SEA).get(),
  labels: [
    {
      x: 105,
      y: 190,
    },
  ],
  width: 330,
  height: 269,
  x: 2158,
  y: 1461,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M328.58 48.9927C327.913 39.8299 327.247 30.6669 326.58 21.5041C311.9 21.6942 296.52 23.2947 283.58 16.5026C279.58 14.432 276.04 11.6412 272.22 9.31046C267.98 6.71967 263.22 4.51897 260.45 0.407715C252.953 4.34201 245.772 8.85013 238.97 13.8918C237.097 15.1616 235.414 16.6906 233.97 18.4333C232.619 20.3771 231.605 22.5346 230.97 24.8152C226.84 37.4791 232.62 52.1135 226.4 63.8871C221.992 72.2217 216.378 79.8597 209.74 86.5541C207.16 89.1649 204.34 91.6656 200.94 93.0561C192.66 96.4371 183.37 92.4559 174.42 92.1558C165.14 91.8457 156.26 95.5468 147.33 98.1576C133.33 102.159 118.66 103.449 104.1 104.34C97.6301 104.73 90.5699 104.88 85.3799 101.009L0.679932 188.885C0.679932 188.995 0.680117 189.116 0.620117 189.236C22.6901 204.73 77.62 250.634 106.28 268.32C101.8 265.559 96.6899 262.118 91.1499 258.207C118.785 244.721 147.164 232.819 176.15 222.556C179.117 221.502 182.093 220.472 185.08 219.465C183.898 218.676 182.549 218.172 181.14 217.994C184.22 212.213 191.14 209.932 197.32 207.701C205.357 204.786 213.106 201.132 220.47 196.788C222.95 195.432 225.237 193.75 227.27 191.786C230.36 188.605 232.33 184.224 236.17 182.013C237.17 181.453 238.47 181.103 239.28 181.873C239.82 182.393 239.94 183.284 240.57 183.684C241.2 184.084 242.21 183.684 242.94 183.334C245.33 182.023 248.21 180.873 250.63 179.583C250.63 179.383 250.82 179.233 251.01 179.152C253.43 178.152 255.95 177.152 258.56 177.272C262.56 177.492 265.91 180.353 269.84 180.973C271.64 181.263 273.51 181.073 275.29 181.473C277.34 181.933 279.16 183.164 281.21 183.574C283.664 183.889 286.157 183.515 288.41 182.493C292.08 181.103 295.7 179.122 297.98 175.921C298.586 175.208 298.906 174.296 298.88 173.361C293.1 171.66 286.51 174.541 281.02 172.08C279.622 171.384 278.315 170.517 277.13 169.5C271.594 165.296 266.522 160.514 262 155.235C261.418 154.489 260.746 153.817 260 153.235C258.21 151.914 255.54 151.234 254.57 149.233C254.245 148.681 253.795 148.213 253.257 147.865C252.719 147.518 252.107 147.301 251.47 147.233C250.192 147.089 248.904 147.056 247.62 147.133C245.139 147.103 242.694 146.539 240.451 145.479C238.207 144.419 236.219 142.889 234.62 140.991C232.72 138.7 231.4 135.719 231.85 132.768C232.147 131.328 232.746 129.967 233.608 128.775C234.47 127.584 235.575 126.589 236.85 125.856C239.376 124.271 242.195 123.213 245.14 122.745L268.24 119.094C269.568 118.946 270.867 118.609 272.1 118.094C273.781 117.155 275.248 115.878 276.41 114.343C278.54 111.902 280.75 109.281 281.26 106.09C281.66 103.549 280.93 100.988 280.26 98.5277C279.47 95.8469 278.39 92.816 275.78 91.8057C274.521 91.4612 273.224 91.2765 271.92 91.2556C271.264 91.2402 270.621 91.071 270.043 90.7618C269.465 90.4525 268.967 90.0118 268.59 89.475C267.59 87.6145 269.15 85.4738 270.72 84.0034C274.741 80.5751 279.096 77.5591 283.72 75.0006C287.84 72.5699 292.07 70.1591 296.72 69.1088C301.37 68.0585 306.62 68.5486 310.4 71.4795C312.195 73.0304 313.761 74.8289 315.05 76.8211L315.37 76.8712C315.86 76.8712 316.37 76.8712 316.85 76.8712C319.71 76.7411 322.03 74.4904 323.68 72.1396C326.64 67.9096 328.411 62.9631 328.81 57.8153C328.961 54.8729 328.884 51.9232 328.58 48.9927Z",
}).get();

export const MIDDLE_ATLANTIC: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.MIDDLE_ATLANTIC).get(),
  labels: [
    {
      x: 343,
      y: 200,
    },
  ],
  width: 605,
  height: 1027,
  x: 1828,
  y: 1603,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M595.27 345.597C597.27 339.845 596.62 319.238 595.27 314.837C589.69 310.636 586.4 303.914 583.43 297.502C580.87 291.98 578.27 286.308 577.83 280.247C577.39 274.375 579.01 268.443 578.1 262.621C577.489 259.361 576.39 256.211 574.84 253.278C566.95 237.273 553.94 224.519 540.76 212.536C538.39 210.385 535.94 208.204 532.98 206.994C529.963 205.927 526.766 205.461 523.57 205.624C522.08 205.624 520.57 205.624 519.11 205.624C515.47 205.624 511.94 205.274 508.88 203.403C502.73 199.662 501.31 191.499 500.51 184.337C503.501 184.201 506.379 183.156 508.759 181.339C511.139 179.523 512.909 177.023 513.83 174.174C514.69 171.353 514.74 168.112 516.68 165.882C516.74 165.801 516.83 165.741 516.9 165.661C495.06 154.928 460.67 138.883 444.23 130.741C419.23 118.357 354.58 63.9603 330.35 46.9951C306.12 30.03 244.74 1.7613 157.52 0.98106C151.96 0.98106 146.61 0.90107 141.44 0.891067C74.2599 0.811043 38.79 4.80227 0.900024 18.4064V1025.8C6.22866 1015.75 10.8337 1005.32 14.6801 994.605C17.0801 987.943 19.18 981.151 22.02 974.659C28.15 960.605 38.02 947.831 51.24 940.149C54.67 938.148 58.32 936.507 61.38 934.007C63.8383 931.859 66.0487 929.443 67.97 926.804C74.43 918.532 80.81 910.009 89.16 903.647C97.8 897.065 108.16 893.114 118.61 890.143C132.529 886.188 146.85 883.816 161.3 883.071C172.11 882.511 183.3 882.801 193.3 878.71C204.18 874.268 212.38 865.195 220.19 856.413C233.76 841.148 247.3 826.404 260.75 811.069C265.92 805.147 271.45 798.995 278.89 796.474C279.622 796.195 280.268 795.727 280.762 795.117C281.255 794.508 281.579 793.778 281.7 793.003C281.895 791.411 281.935 789.803 281.82 788.202C281.829 785.783 282.361 783.394 283.38 781.2C283.38 781.2 283.5 781.07 283.38 781.03C281.51 780.449 279.739 779.585 278.13 778.469C274.63 776.308 271.06 774.068 268.58 770.797C265.18 766.325 264.24 760.454 264.07 754.792C263.9 749.13 264.37 743.498 263.36 737.977C261.69 728.894 257.47 719.751 250.13 714.139L242.86 708.578C240.08 706.447 237.18 704.266 233.77 703.446C232.461 703.135 231.115 703.007 229.77 703.066C224.35 703.146 218.85 705.707 213.33 705.747C212.92 705.747 212.52 705.747 212.12 705.697C208.71 705.397 205.48 703.966 202.12 703.546C200.281 703.477 198.45 703.249 196.65 702.866C194.08 702.096 192.06 700.145 189.98 698.435C186.869 695.868 183.441 693.713 179.78 692.023C177.711 691.222 175.739 690.192 173.9 688.952C172.983 688.325 172.225 687.494 171.685 686.523C171.145 685.553 170.839 684.469 170.79 683.36C170.891 682.183 171.231 681.039 171.79 679.999C176.09 670.786 185.45 663.524 185.87 653.361C186.02 649.93 185.08 646.498 185.43 643.077C185.87 638.696 188.35 634.825 189.94 630.714C191.53 626.603 191.88 621.131 190.09 617.1C188.18 612.788 181.8 613.038 178.28 609.887C176.901 608.537 175.904 606.846 175.39 604.986C172.7 596.603 175.55 587.551 178.39 579.208C179.71 575.337 181.1 571.326 183.92 568.365C188.58 563.483 195.92 562.553 201.92 559.462C210.11 555.221 215.46 547.088 220.11 539.116C233.745 515.74 244.576 490.837 252.38 464.923C254.097 459.683 255.306 454.29 255.99 448.818C256.49 443.817 256.88 437.115 261.08 434.304C263.402 422.787 264.289 411.028 263.72 399.293C263.53 395.292 263.17 391.291 264.13 387.379C265.103 383.737 267.168 380.481 270.046 378.047C272.924 375.613 276.478 374.119 280.23 373.765C280.67 373.765 281.11 373.765 281.55 373.765C285.01 373.765 288.44 374.635 291.88 375.055C292.981 375.191 294.09 375.261 295.2 375.266C298.281 375.483 301.346 374.666 303.91 372.945C305.91 371.424 307.32 369.174 309.2 367.463C313.2 363.862 318.88 363.102 324.2 362.462C325.15 362.352 326.12 362.252 327.08 362.232C328.007 362.209 328.932 362.314 329.83 362.542C331.576 363.127 333.21 364.007 334.66 365.143C339.39 368.434 344.17 371.765 347.98 376.146C349.79 378.147 351.39 380.487 353.58 382.148C355.733 383.593 358.094 384.703 360.58 385.439L389.3 395.592C394.187 397.22 398.987 399.099 403.68 401.224C409.191 403.759 414.562 406.587 419.77 409.696L428.83 415.228C432.309 417.468 435.949 419.448 439.72 421.15C448.8 424.961 459.08 425.461 467.89 429.872C474.89 433.373 480.89 439.295 488.53 440.736C492.16 441.416 495.9 441.036 499.53 441.376C506.193 442.027 512.408 445.022 517.07 449.828C517.995 450.901 518.998 451.904 520.07 452.829C521.477 453.831 523.038 454.598 524.69 455.1C529.108 456.794 533.738 457.871 538.45 458.301H538.5C538.62 458.301 538.72 458.301 538.83 458.301C555.19 447.087 563.06 437.104 571.54 417.709C580.02 398.313 583.66 399.233 583.66 399.233L581.54 393.171C575.74 376.606 592.67 361.401 593.88 360.341L603.26 362.272L603.17 362.172L603.65 362.272C603.65 362.272 593.29 351.368 595.27 345.597Z",
}).get();

export const NORTH_ATLANTIC: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.NORTH_ATLANTIC).get(),
  labels: [
    {
      x: 428,
      y: 487,
    },
  ],
  width: 710,
  height: 1005,
  x: 1828,
  y: 647,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M0.890015 0.658203V975.597C38.89 961.893 74.2801 957.861 141.43 957.931C146.43 957.931 151.7 957.931 157.12 958.021C244.34 958.832 305.72 987.1 329.95 1004.04L330.14 1004.18C330.145 1004.1 330.145 1004.02 330.14 1003.94L330.3 1004.04L330.49 1004.18C330.49 1004.06 330.49 1003.94 330.55 1003.83L414.11 917.139L415.11 916.139C415.99 914.748 417.62 915.488 418.23 914.238C418.477 913.59 418.662 912.92 418.78 912.237C419.08 911.067 419.72 910.007 420.03 908.836C420.228 908.266 420.265 907.652 420.136 907.063C420.007 906.473 419.718 905.931 419.3 905.495C418.11 905.635 417.61 904.005 416.63 903.315C415.46 902.484 413.46 902.944 412.8 901.674C412.28 900.674 413.11 899.543 413.88 898.733C414.47 898.113 415.05 897.493 415.64 896.883C415.837 896.698 415.996 896.477 416.11 896.232C416.169 895.997 416.168 895.75 416.109 895.515C416.049 895.279 415.933 895.062 415.77 894.882C414.91 893.812 413.41 893.562 412.23 892.881C410.727 891.836 409.604 890.33 409.03 888.59C408.732 888.026 408.636 887.376 408.76 886.75C408.991 886.198 409.38 885.728 409.88 885.399C411.619 883.964 413.26 882.414 414.79 880.758C415.124 880.481 415.396 880.138 415.59 879.751C415.785 879.363 415.897 878.94 415.92 878.507C415.82 877.357 414.62 876.706 413.81 875.886C412.11 874.156 412.11 871.425 412.22 869.004C412.219 868.482 412.31 867.964 412.49 867.474C412.738 867.006 413.11 866.617 413.565 866.349C414.021 866.08 414.542 865.943 415.07 865.953C416.113 866.063 417.128 866.354 418.07 866.813C418.388 866.924 418.681 867.097 418.93 867.324C419.156 867.61 419.347 867.922 419.5 868.254C420.182 869.178 421.126 869.875 422.21 870.254C423.565 871.016 425.078 871.451 426.63 871.525H426.79H427.02C427.55 871.488 428.078 871.421 428.6 871.325C429.253 871.268 429.896 871.124 430.51 870.895C431.064 870.601 431.568 870.219 432 869.764L436.59 865.403C437.146 864.909 437.645 864.355 438.08 863.752C438.668 862.73 439.115 861.633 439.41 860.492C441.53 854.28 446.41 849.438 451.04 844.847C454.29 841.646 459.19 841.746 463.66 840.845C466.949 840.146 470.298 839.76 473.66 839.695C475.595 839.678 477.53 839.792 479.45 840.035C479.868 840.089 480.289 840.112 480.71 840.105C481.146 840.187 481.596 840.145 482.01 839.984C482.423 839.823 482.784 839.55 483.05 839.195C483.281 838.62 483.281 837.979 483.05 837.404C482.614 836.226 481.947 835.147 481.088 834.229C480.23 833.312 479.197 832.576 478.05 832.063C475.752 831.053 473.398 830.174 471 829.432C463.54 826.661 457.29 821.179 452.73 814.657C451.725 813.382 451.014 811.899 450.65 810.316C450.25 807.955 451.26 805.565 452.57 803.544C454.505 800.788 456.731 798.25 459.21 795.972L462.69 792.541C462.8 792.431 462.95 792.311 463.09 792.391C463.23 792.471 463.09 792.391 463.09 792.391C463.44 791.98 463.9 791.971 464.37 791.56C464.875 791.185 465.341 790.759 465.76 790.29C466.363 789.243 466.605 788.027 466.45 786.829L466.36 783.168C466.27 779.257 465.46 774.855 468.36 772.264C470.082 770.955 472.198 770.27 474.36 770.324C474.77 770.324 475.18 770.324 475.6 770.324C479.334 770.436 482.99 771.415 486.28 773.185C491.23 775.846 495.19 780.187 500.39 782.348C503.785 783.611 507.401 784.176 511.02 784.008C512.33 784.008 513.65 783.938 514.95 783.848C517.72 783.826 520.452 783.194 522.95 781.997C525.36 780.657 527.25 777.996 526.95 775.305C526.74 773.445 525.59 771.844 524.79 770.154C523.99 768.463 523.58 766.303 524.73 764.822C525.73 763.542 527.5 763.262 529.07 762.822C531.53 762.181 533.98 760.891 535.19 758.66C536.25 756.66 536.19 754.299 537.19 752.298C538.54 749.518 541.59 747.987 544.57 747.207C550.598 745.652 556.993 746.476 562.43 749.507C566.07 751.508 571.27 750.738 573.96 753.899C575.59 755.809 575.84 758.64 577.55 760.481C580.32 763.482 585.32 762.481 588.99 764.242C590.533 765.029 591.786 766.287 592.568 767.833C593.35 769.38 593.62 771.135 593.34 772.845C594.371 775.668 594.889 778.652 594.87 781.657C594.87 783.938 594.62 786.459 596.03 788.249C596.618 788.898 597.268 789.487 597.97 790.01C600.114 791.933 601.526 794.539 601.967 797.385C602.408 800.231 601.851 803.143 600.39 805.625C599.15 807.625 597.39 809.166 596.19 811.156C594.99 813.147 594.04 816.088 591.66 816.738L591.93 817.878C594.68 820.529 598.3 822.33 601.61 824.35C605.44 826.681 608.99 829.472 612.97 831.543C621.18 835.824 630.36 836.744 639.72 836.794C645.26 836.794 650.86 836.574 656.37 836.504L656.22 834.503C655.81 829.102 655.38 823.58 653.22 818.609C652.986 817.853 652.475 817.214 651.79 816.818C651.403 816.677 650.99 816.626 650.58 816.668C650.3 816.653 650.02 816.653 649.74 816.668C646.66 816.668 643.94 814.667 640.96 813.847C636.37 812.537 635.63 809.846 630.96 809.116C624.57 808.115 620.56 804.724 619.66 798.312C618.66 790.88 623.74 784.108 629.13 778.876C634.52 773.645 634.8 771.064 639.4 765.132C644 759.2 646.4 750.548 642.4 744.196C642.28 744.196 642.16 744.196 642.04 744.196C640.203 744.307 638.465 745.063 637.131 746.332C635.797 747.6 634.954 749.299 634.75 751.128C634.64 752.388 634.84 753.719 634.32 754.869C633.08 757.61 629.16 757.27 626.32 758.35C623.91 759.27 622.19 761.401 620.06 762.852C618.973 763.598 617.713 764.053 616.4 764.172C615.838 764.202 615.277 764.105 614.758 763.889C614.238 763.672 613.774 763.342 613.4 762.922C612.748 762.02 612.398 760.934 612.4 759.821C612.25 757.57 612.73 755.319 612.68 753.069C612.63 750.818 611.88 748.367 609.98 747.157C607.51 745.586 603.75 746.497 601.85 744.276C600.78 743.026 600.73 741.275 600.73 739.604C600.73 736.073 600.9 732.152 603.36 729.601C604.99 727.941 607.36 727.221 609.61 726.691C613.674 725.752 617.821 725.219 621.99 725.1C622.3 724.744 622.634 724.41 622.99 724.1L628.99 718.988C630.77 717.468 632.68 714.897 631.18 713.096C630.42 712.166 629.09 712.006 627.89 711.916L620.89 711.346C619.67 711.256 618.29 711.076 617.56 710.085C616.46 708.595 617.56 706.544 618.71 705.084C622.664 699.693 626.201 694.008 629.29 688.079C631.72 683.417 633.93 678.196 632.86 673.074C631.97 668.793 628.96 665.322 626.42 661.761C623.88 658.2 621.64 653.878 622.62 649.607C623.51 645.706 627.09 642.755 631 641.935C631.901 641.742 632.819 641.648 633.74 641.654C636.705 641.779 639.597 642.616 642.17 644.095C643.026 644.698 644.02 645.076 645.06 645.195H645.27H645.44C646.364 645.119 647.254 644.813 648.03 644.305L658.46 638.644C662.8 636.293 667.23 633.862 670.59 630.231C675.02 625.419 677.41 619.738 682.85 616.107C685.077 614.76 687.649 614.092 690.25 614.186C692.25 606.744 703.68 472.573 707.7 436.992C712.14 397.79 703.81 363.969 686.12 328.729C668.267 293.164 649.013 258.277 628.36 224.067L628.07 224.227L627.97 224.067C624.578 226.101 620.956 227.723 617.18 228.898C612.102 230.305 606.849 230.979 601.58 230.899C598.45 230.899 595.31 230.749 592.19 230.569C583.93 230.108 575.62 229.508 567.32 229.088C561.526 228.231 555.685 227.73 549.83 227.588C546.352 227.523 542.876 227.764 539.44 228.308C538.55 228.458 537.67 228.628 536.79 228.818C533.04 229.618 529.05 230.819 525.34 231.819C521.232 233.017 516.988 233.69 512.71 233.82C511.319 233.809 509.932 233.688 508.56 233.46C500.83 232.169 494.1 227.178 489.22 221.046C484.34 214.914 481.1 207.652 478.09 200.419C475.91 195.178 473.79 189.846 470.48 185.235C464.09 176.322 453.92 170.98 443.88 166.549C440.24 164.949 436.16 162.998 434.94 159.197C433.57 154.915 437.07 150.094 441.47 149.194C441.97 149.089 442.479 149.032 442.99 149.024C444.915 149.101 446.798 149.614 448.497 150.524C450.196 151.433 451.668 152.716 452.8 154.275C453.376 154.362 453.958 154.398 454.54 154.385C456.391 154.342 458.211 153.903 459.878 153.1C461.546 152.296 463.023 151.145 464.21 149.724C466.95 146.613 468.43 142.582 469.43 138.56C470.447 134.987 470.743 131.246 470.3 127.557C469.3 121.245 465.11 115.964 461.08 111.012C458.49 107.841 455.79 104.58 452.14 102.709C450.777 102.187 449.515 101.433 448.41 100.479C447.41 99.4085 447.08 97.4779 448.2 96.5776C448.878 96.1083 449.698 95.8891 450.52 95.9574C461.212 95.9604 471.518 99.9475 479.43 107.141C483.1 110.522 486.79 114.823 491.78 114.913H491.72H492.17C487.7 112.853 486.05 106.361 489 102.409C490.1 100.919 491.7 99.8086 492.62 98.1981C494.16 95.4872 493.36 91.9261 491.5 89.4254C489.64 86.9246 486.91 85.2441 484.25 83.6136C484.144 83.6339 484.036 83.6339 483.93 83.6136H483.86C483.797 83.6192 483.733 83.6192 483.67 83.6136C483.14 83.4691 482.645 83.2169 482.217 82.8727C481.788 82.5285 481.435 82.0996 481.18 81.613C480.68 80.6127 472.64 59.2262 498.97 58.9061C500.67 58.9061 502.49 58.9761 504.48 59.1461C505.347 59.2295 506.219 59.2629 507.09 59.2461C518.55 59.2461 501.42 47.8227 504.37 46.4022C508.362 44.2958 512.134 41.7959 515.63 38.9399C514.53 26.3361 516.11 13.5121 517.97 0.708206L0.890015 0.658203Z",
}).get();

export const NORTH_SEA: TerritoryMapData = new TerritoryMapDataGenerator({
  ...new TerritoryDataGenerator(Territory.NORTH_SEA).get(),
  labels: [
    {
      x: 136,
      y: 229,
    },
  ],
  width: 326,
  height: 537,
  x: 2526,
  y: 1172,
  fill: "#96B2B2",
  texture: {
    texture: Texture.SEA,
  },
  path: "M312.56 207.022C312.62 204.841 312.69 202.651 312.93 200.49C306 200 291.65 194.418 285.72 188.676C279.1 182.245 273.54 174.792 273.34 165.569C273.29 163.199 273.7 158.657 277.34 156.397C278.45 155.706 279.29 154.666 280.34 153.956C286.222 150.099 291.741 145.717 296.83 140.862C298.493 139.464 299.854 137.742 300.83 135.8C301.296 134.821 301.488 133.734 301.386 132.654C301.284 131.575 300.892 130.543 300.25 129.668C298.81 127.978 296.35 127.668 294.12 127.668C288.2 127.728 282.42 129.668 276.49 129.768C274.87 129.768 272.97 129.528 272.15 128.128C271.678 126.993 271.628 125.726 272.01 124.557L272.82 120.626C272.996 119.218 273.522 117.877 274.35 116.724C275.88 114.944 278.5 114.724 280.81 114.364C284.807 113.624 288.516 111.781 291.52 109.042C293.52 107.222 291.7 103.28 289.65 101.53C287.6 99.7793 284.9 99.0491 282.32 98.2788C281.14 97.9287 279.76 97.3585 279.54 96.1381C279.32 94.9178 280.54 93.8175 281.69 93.2973C284.52 92.0569 287.74 92.297 290.78 91.7668C292.52 91.4667 294.52 90.5864 294.78 88.8359C294.806 87.6416 294.369 86.4837 293.56 85.6049C291.279 82.5222 288.587 79.766 285.56 77.4124C283.711 76.178 282.03 74.7086 280.56 73.0411C279.21 71.2806 278.49 68.8297 279.42 66.8191C282.67 59.817 280.52 52.2247 281.78 44.5823C282.188 41.5798 282.901 38.6269 283.91 35.7697C284.83 33.379 286.11 31.1483 287.03 28.7676C288.53 24.8864 289.03 20.6851 290.4 16.7639C291.469 13.9566 292.756 11.2374 294.25 8.63139C295.72 5.92056 297.25 3.19963 298.74 0.528809C297.69 0.528809 296.65 0.61887 295.61 0.688892C278.97 1.79923 262.61 5.10031 246.22 8.38131C187.44 20.2049 126.08 33.2089 79.71 71.2305C66.98 81.6737 55.44 93.9374 41.96 103.24C41.9843 103.288 42.0044 103.339 42.0201 103.39C39.4701 109.732 34.02 113.653 27.92 116.834C20.5399 120.698 13.382 124.973 6.48004 129.638C4.40004 131.049 2.23003 132.639 1.22003 134.91C0.210028 137.181 0.870028 140.452 3.22003 141.362C4.39183 141.694 5.62606 141.742 6.82012 141.502C19.8901 140.092 32.89 143.983 45.46 147.824C47.5192 148.346 49.4928 149.161 51.3201 150.245C56.7401 153.796 58.0301 161.538 56.0301 167.7C54.0301 173.862 49.4901 178.823 45.0901 183.565L26.5801 203.501C22.1901 208.232 17.6602 213.204 15.8602 219.396C13.2902 228.259 16.8599 237.701 21.1299 245.874C25.3999 254.046 30.6501 262.089 31.7501 271.252C32.4801 277.344 30.57 284.506 25.18 287.207C25.6203 289.514 25.8381 291.859 25.8301 294.209C26.3624 305.309 30.3283 315.97 37.18 324.718C40.18 328.549 43.7501 331.99 46.2701 336.182C49.4001 341.393 50.74 347.485 51.72 353.487C52.41 357.718 52.9301 362.14 51.5801 366.201C50.2301 370.262 46.51 373.853 42.24 373.663C43.38 374.533 43.0701 376.254 42.5401 377.594C46.2101 379.395 48.8401 382.746 51.3301 385.987C53.9801 389.438 56.7501 393.219 56.8001 397.57C56.8701 402.922 52.8 407.343 48.93 410.985C45.69 413.985 42.2101 417.176 40.5901 421.158C40.9601 421.058 41.33 420.958 41.71 420.878C45.3028 420.241 48.961 420.052 52.6001 420.317C61.4001 420.667 70.47 421.668 78.19 425.919C85.91 430.17 92.0099 438.403 91.3999 447.196C90.8799 454.678 85.8 461.02 80.49 466.331C71.0338 475.767 60.1292 483.629 48.19 489.619C44.54 491.449 40.5701 493.31 38.5201 496.841C36.8601 499.712 37.31 504.113 40.15 506.074C41.48 506.994 42.59 508.074 43.91 509.015C45.66 510.215 47.9801 510.475 50.0301 510.745C53.0301 511.135 56.72 512.356 57.16 515.386C57.214 516.122 57.1081 516.861 56.8492 517.552C56.5902 518.242 56.1843 518.869 55.66 519.388C55.9235 519.485 56.1807 519.598 56.43 519.728C57.7937 520.667 58.9509 521.875 59.8301 523.279C63.0635 527.7 66.2901 532.125 69.5101 536.553C71.3099 535.988 73.1435 535.537 75 535.202L123.13 525.63C124.408 525.326 125.717 525.175 127.03 525.179C134.03 522.239 141.03 519.288 147.95 516.277C163.3 509.615 158.31 493.35 169.34 474.954C184.74 449.286 199.21 444.605 207.66 440.384C207.77 423.678 210.28 407.023 213.66 390.638C216.56 376.634 220.17 362.53 227.45 350.216C241.01 327.209 267.51 312.574 294.16 313.205C299.63 313.345 305.04 314.095 310.46 314.725C312.46 314.955 314.62 314.985 316.71 315.205C316.88 314.205 317.05 313.205 317.23 312.204C319.54 299.2 321.85 286.086 325.23 273.272C325.36 272.792 325.49 272.272 325.63 271.832C320.777 266.093 317.329 259.301 315.56 251.996C311.92 237.421 312.18 222.107 312.56 207.022Z",
}).get();
