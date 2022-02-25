import useSpotify from '../hooks/useSpotify';
function Lofi({ lofi, setLofi }) {
  return (
    <div>
        <div className='song-container'>
        <svg width="850" height="843" viewBox="0 0 850 843" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undraw_studying_re_deca (1) 1" clip-path="url(#clip0_2_3)">
<path id="Vector" d="M842 421C842.055 468.913 833.914 516.482 817.93 561.65C817.92 561.68 817.91 561.7 817.9 561.73C817.83 561.94 817.76 562.13 817.68 562.34V562.35C814.27 571.93 810.523 581.35 806.44 590.61C796.139 613.961 783.734 636.327 769.38 657.43C765.9 662.57 762.297 667.627 758.57 672.6C754.47 678.1 750.24 683.49 745.88 688.77C741.86 693.64 737.733 698.417 733.5 703.1C728.47 708.68 723.29 714.117 717.96 719.41C705.416 731.903 692.096 743.593 678.08 754.41C675.62 756.32 673.133 758.197 670.62 760.04C664.77 764.36 658.803 768.527 652.72 772.54C639.339 781.385 625.459 789.452 611.15 796.7C608.68 797.96 606.19 799.2 603.69 800.4C594.02 805.07 584.153 809.367 574.09 813.29C571.22 814.42 568.34 815.51 565.43 816.56C564.94 816.75 564.45 816.93 563.95 817.1C529.443 829.554 493.448 837.415 456.89 840.48C454.35 840.71 451.807 840.903 449.26 841.06C446.56 841.25 443.857 841.403 441.15 841.52C439.01 841.63 436.88 841.71 434.73 841.77C434.29 841.79 433.84 841.81 433.4 841.81C430.51 841.9 427.61 841.957 424.7 841.98C423.47 841.99 422.24 842 421 842C420.42 842 419.84 842 419.26 841.99C410.87 841.96 402.543 841.687 394.28 841.17C394.11 841.16 393.94 841.14 393.77 841.14C390.81 840.94 387.86 840.73 384.92 840.47C374.45 839.59 364.093 838.323 353.85 836.67C351.49 836.3 349.137 835.9 346.79 835.47C336.6 833.67 326.543 831.5 316.62 828.96C313.67 828.21 310.737 827.427 307.82 826.61C290.986 821.925 274.464 816.188 258.35 809.43C249.1 805.55 240.023 801.357 231.12 796.85C227.11 794.82 223.14 792.727 219.21 790.57C218.14 789.99 217.08 789.4 216.02 788.81C208.28 784.49 200.7 779.937 193.28 775.15C187.2 771.24 181.233 767.173 175.38 762.95C174.66 762.45 173.95 761.93 173.24 761.41C168.75 758.14 164.333 754.787 159.99 751.35C150.54 743.86 141.427 735.99 132.65 727.74C126.58 722.04 120.687 716.16 114.97 710.1C81.6609 674.874 54.6755 634.167 35.2001 589.77C31.0601 580.32 27.2601 570.697 23.8001 560.9C23.7889 560.878 23.7821 560.855 23.7801 560.83C7.99007 515.904 -0.0510642 468.621 8.99454e-05 421C8.99454e-05 244.24 108.94 92.92 263.34 30.52C318.365 8.37636 377.439 -1.92241 436.712 0.295133C495.984 2.51267 554.123 17.1967 607.34 43.39C746.38 112.12 842 255.4 842 421Z" fill="#000000"/>
<path id="Vector_2" d="M607.34 43.39V575.4H263.34V30.52C318.365 8.37633 377.439 -1.92244 436.712 0.295102C495.984 2.51264 554.123 17.1967 607.34 43.39Z" fill="#7E93B4"/>
<g id="cloud">
<path id="Vector_3" d="M346.122 302.514C355.454 287.08 366.511 270.601 383.829 265.561C403.884 259.725 424.486 271.319 441.96 282.759C494.22 316.975 544.547 354.056 592.711 393.831L592.658 394.43C555.161 391.844 517.663 389.258 480.166 386.672C453.074 384.804 425.051 382.678 401.11 369.862C392.024 364.998 383.168 358.502 372.874 358.049C360.083 357.487 348.931 366.42 340.166 375.753C288.323 430.959 273.32 515.383 215.157 563.886C251.833 473.436 295.625 386.038 346.122 302.514V302.514Z" fill="#BABABA"/>
</g>
<path id="Vector_4" d="M632.502 56.9595C631.632 56.3795 630.752 55.8295 629.882 55.2695C604.733 39.1853 577.777 26.1187 549.572 16.3395L543.032 106.56H501.572V3.16954C498.962 2.62954 496.332 2.11954 493.702 1.63954V106.56H444.431C417.308 106.56 391.295 95.7847 372.116 76.6054C352.936 57.4261 342.162 31.4133 342.162 4.28966V4.28956C339.522 4.85956 336.902 5.46956 334.282 6.11956V106.56H294.152L287.922 20.5296C258.936 31.6459 231.419 46.2643 205.982 64.0596C205.542 64.3596 205.102 64.6696 204.672 64.9696C202.462 66.5196 200.282 68.0996 198.112 69.6996V571.89H316.382L314.292 542.94L302.792 225.99H534.382L522.882 542.94L520.792 571.89H637.752V60.4396C636.012 59.2596 634.262 58.0996 632.502 56.9595ZM334.282 199.74H300.892L294.722 114.44H334.282V199.74ZM493.702 199.74H437.622V198.05C437.622 197.237 437.461 196.433 437.15 195.682C436.839 194.932 436.383 194.25 435.808 193.676C435.233 193.102 434.551 192.647 433.8 192.337C433.049 192.027 432.244 191.868 431.432 191.87H407.052C406.24 191.869 405.436 192.029 404.686 192.339C403.936 192.65 403.255 193.105 402.681 193.679C402.107 194.253 401.652 194.934 401.341 195.684C401.031 196.434 400.871 197.238 400.872 198.05V199.74H342.162V114.44H493.702V199.74ZM501.572 199.74V114.44H542.462L536.292 199.74H501.572Z" fill="#3F3D56"/>
<path id="Vector_5" d="M817.931 561.648C817.921 561.678 817.911 561.698 817.901 561.728C817.831 561.938 817.761 562.128 817.681 562.338V562.348C814.271 571.928 810.524 581.348 806.441 590.608L35.201 589.768C31.061 580.318 27.261 570.695 23.801 560.898C23.7898 560.876 23.783 560.852 23.781 560.828L817.931 561.648Z" fill="#3F3D56"/>
<path id="Vector_6" d="M529.711 564.938H394.711V582.938H529.711V564.938Z" fill="white"/>
<g id="flower">
<path id="Vector_7" d="M216.01 741.21C216.49 736.98 217.153 732.777 218 728.6C222.628 705.953 232.559 684.725 246.98 666.66C255.23 667.12 262.46 665.86 263.15 649.88C263.28 647.04 265.39 644.57 265.85 641.77C265.07 641.88 264.26 641.94 263.48 641.99C263.23 642 262.97 642.02 262.73 642.03H262.64C261.774 642.071 260.915 641.86 260.166 641.422C259.418 640.985 258.812 640.341 258.421 639.567C258.031 638.792 257.873 637.922 257.967 637.06C258.061 636.198 258.402 635.382 258.95 634.71C259.29 634.3 259.63 633.88 259.97 633.46C260.48 632.81 261.01 632.18 261.53 631.54C261.59 631.47 261.64 631.41 261.7 631.34C262.29 630.61 262.88 629.88 263.48 629.15C262.396 627.467 260.938 626.057 259.22 625.03C253.27 621.54 245.06 623.96 240.76 629.34C236.45 634.72 235.63 642.28 237.13 649C238.41 654.76 241.2 660.04 244.33 665.06C244.01 665.47 243.67 665.87 243.35 666.29C237.452 673.877 232.311 682.022 228 690.61C229.22 681.08 214.31 646.68 208.54 639.39C201.61 630.64 187.41 634.46 186.19 645.56C186.18 645.66 186.16 645.77 186.15 645.88C187.01 646.36 187.85 646.87 188.67 647.42C189.7 648.108 190.498 649.092 190.96 650.242C191.421 651.391 191.525 652.654 191.257 653.863C190.989 655.073 190.362 656.173 189.458 657.02C188.553 657.867 187.414 658.421 186.19 658.61L186.06 658.63C174.6 675 211.35 717.61 220.56 708.05C218.244 714.557 216.396 721.22 215.03 727.99C213.804 733.961 212.949 740.003 212.47 746.08C211.887 753.734 211.923 761.422 212.58 769.07C212.562 768.981 212.548 768.891 212.54 768.8C210.49 752.14 175.42 727.37 165.18 729.43C159.28 730.62 153.47 730.35 154.37 736.3C154.38 736.4 154.4 736.49 154.41 736.59C156 737.232 157.547 737.977 159.04 738.82C159.9 739.3 160.74 739.82 161.56 740.36C162.524 741.005 163.287 741.909 163.76 742.969C164.233 744.029 164.396 745.2 164.232 746.349C164.068 747.497 163.583 748.576 162.832 749.461C162.082 750.346 161.097 751.001 159.99 751.35C164.34 754.78 168.757 758.133 173.24 761.41C173.95 761.93 174.66 762.45 175.38 762.95C181.23 767.17 187.197 771.237 193.28 775.15C200.7 779.93 208.28 784.483 216.02 788.81C217.08 789.4 218.14 789.99 219.21 790.57C216.52 779.501 215.157 768.151 215.15 756.76C215.147 751.565 215.434 746.373 216.01 741.21V741.21ZM221.48 705.48L221.5 705.45C221.5 705.469 221.493 705.486 221.48 705.5V705.48ZM213.51 777.39L213.2 776.7C213.21 776.19 213.21 775.69 213.2 775.17C213.2 775.03 213.17 774.89 213.17 774.75C213.29 775.64 213.39 776.53 213.52 777.42L213.51 777.39ZM259.44 778.75C259.55 778.29 259.64 777.97 259.75 777.51C259.71 777.41 259.67 777.31 259.63 777.22C256.3 769.29 238.72 785.28 231.12 796.85C240.02 801.35 249.097 805.543 258.35 809.43C258.97 808.65 259.61 807.88 260.24 807.1C260.3 807.03 260.35 806.97 260.4 806.9C261.76 805.22 263.13 803.56 264.48 801.88C264.49 801.55 264.49 801.22 264.49 800.9C264.477 796.083 263.886 791.286 262.73 786.61C261.801 786.653 260.882 786.409 260.096 785.912C259.31 785.415 258.696 784.688 258.337 783.83C257.978 782.973 257.891 782.025 258.088 781.116C258.286 780.208 258.758 779.382 259.44 778.75V778.75Z" fill="#74BB1A"/>
</g>
<path id="Vector_8" d="M227.815 566.348H260.346C260.616 566.348 260.835 566.129 260.835 565.86V564.323C260.835 564.053 260.616 563.835 260.346 563.835H227.815C227.545 563.835 227.327 564.053 227.327 564.323V565.86C227.327 566.129 227.545 566.348 227.815 566.348Z" fill="#3F3D56"/>
<g id="writing-hand">
<path id="pen" d="M467.987 574.615L473.371 562.556L529.758 513.259C529.744 513.295 529.73 513.332 529.716 513.369C529.621 513.617 529.516 513.893 529.413 514.178C529.083 515.086 528.726 516.192 528.611 517.258C528.496 518.315 528.608 519.435 529.335 520.267C530.048 521.083 531.206 521.445 532.365 521.617C533.543 521.791 534.842 521.785 535.94 521.769C536.033 521.768 536.123 521.766 536.213 521.765C536.661 521.758 537.068 521.752 537.423 521.758C537.754 521.763 538.013 521.779 538.2 521.807C538.153 521.854 538.096 521.908 538.027 521.969L481.282 571.58L467.987 574.615Z" fill="#3F3D56" stroke="black"/>
<path id="forearm pen" d="M475.758 570.626C478.159 572.282 480.894 573.391 483.77 573.876C486.646 574.361 489.594 574.209 492.405 573.431C495.216 572.654 497.823 571.269 500.041 569.375C502.26 567.481 504.036 565.124 505.244 562.469L575.839 569.072L558.508 536.558L494.127 535.272C489.533 533.537 484.462 533.548 479.875 535.302C475.288 537.056 471.504 540.432 469.24 544.79C466.975 549.147 466.388 554.184 467.589 558.946C468.791 563.708 471.697 567.863 475.758 570.625V570.626Z" fill="#FFB6B6"/>
<path id="whole arm pen" d="M547.34 568.4L645.03 579.352L645.367 578.921C646.011 578.098 709.933 496.275 720.672 476.797C727.28 465.095 729.686 451.485 727.492 438.226L727.419 437.902L727.165 437.687C721.957 433.323 715.417 430.863 708.624 430.714C701.831 430.565 695.19 432.736 689.796 436.868C663.859 456.955 642.946 482.796 628.708 512.351L620.628 529.172L547.34 536.4V568.4Z" fill="#6C63FF"/>
<path id="pen tip" d="M472.96 562.252L474.337 561.048C476.176 561.97 477.817 563.242 479.167 564.795C480.766 566.618 481.927 568.783 482.563 571.124L481.516 572.039L470.044 574.657L467.122 575.326L468.34 572.587L472.96 562.252Z" fill="#CCCCCC"/>
</g>
<path id="Vector_9" d="M468.082 797.242L449.262 841.062C446.562 841.252 443.859 841.406 441.152 841.522C439.012 841.632 436.882 841.712 434.732 841.772L434.002 842.002L433.402 841.812C430.512 841.902 427.612 841.959 424.702 841.982C423.472 841.992 422.242 842.002 421.002 842.002C420.422 842.002 419.842 842.002 419.262 841.992L420.512 837.712L421.982 832.642L427.822 812.562L436.252 783.572L448.792 788.952L468.082 797.242Z" fill="#FFB6B6"/>
<path id="Vector_10" d="M603.692 800.402C594.022 805.072 584.156 809.369 574.092 813.292L564.252 796.742L595.972 782.812L603.692 800.402Z" fill="#FFB6B6"/>
<path id="Vector_11" d="M670.622 725.182V760.042C664.772 764.362 658.806 768.529 652.722 772.542V725.182H670.622Z" fill="#CACACA"/>
<path id="Vector_12" d="M733.502 703.102C728.472 708.682 723.292 714.119 717.962 719.412C705.418 731.906 692.098 743.596 678.082 754.412H598.282C596.164 754.413 594.07 753.961 592.14 753.086C590.21 752.212 588.489 750.935 587.092 749.342L587.082 749.312C585.419 747.435 584.262 745.163 583.722 742.712L583.712 742.692C583.487 741.641 583.373 740.568 583.372 739.492V718.022C583.375 714.068 584.946 710.276 587.742 707.479C590.537 704.682 594.328 703.108 598.282 703.102H733.502Z" fill="#3F3D56"/>
<path id="Vector_13" d="M766.382 619.302L757.732 656.362C758.578 661.732 758.86 667.175 758.572 672.602C754.472 678.102 750.242 683.492 745.882 688.772C741.862 693.642 737.736 698.419 733.502 703.102C728.472 708.682 723.292 714.119 717.962 719.412C704.082 723.772 687.722 725.552 670.622 725.672C664.722 725.722 658.732 725.562 652.722 725.242C628.352 723.962 603.702 720.052 583.512 715.992C578.172 714.932 573.152 713.852 568.532 712.802C559.782 710.832 552.462 708.992 547.162 707.592C541.192 706.032 537.792 705.022 537.792 705.022L515.082 743.052L494.462 777.572L467.892 811.482C465.352 811.712 462.809 811.906 460.262 812.062C457.562 812.252 454.859 812.406 452.152 812.522C450.012 812.632 447.882 812.712 445.732 812.772L445.002 813.002L444.402 812.812L434.762 809.742L431.512 808.712L419.822 804.992C419.822 804.992 422.432 796.772 427.002 783.062C428.682 778.032 440.582 740.842 453.032 708.372C456.722 698.732 460.542 688.952 464.472 679.222C467.692 671.232 470.972 663.272 474.292 655.422C480.062 641.812 507.942 634.472 540.772 630.622C542.442 630.432 544.122 630.242 545.812 630.062C562.542 628.302 580.292 627.392 596.892 626.972C605.202 626.762 613.222 626.682 620.682 626.672C623.092 626.672 625.436 626.679 627.712 626.692H627.722C633.872 626.722 639.532 626.812 644.512 626.912C645.482 626.932 646.422 626.962 647.342 626.982H647.352C647.972 626.992 648.582 627.012 649.182 627.022C660.072 627.302 666.752 627.642 666.752 627.642L669.342 607.322L669.872 603.222L670.372 599.322V599.312L670.432 598.822L670.842 598.812L678.042 598.672L738.562 597.492L764.34 596.4L766.382 619.302Z" fill="#2F2E41"/>
<path id="Vector_14" d="M602.152 783.702C599.682 784.962 597.192 786.202 594.692 787.402C585.022 792.072 575.156 796.369 565.092 800.292C562.222 801.422 559.342 802.512 556.432 803.562C556.112 803.112 555.782 802.662 555.452 802.212C541.572 783.162 532.932 771.022 515.082 743.052C507.612 731.352 500.102 719.152 492.812 706.692L545.592 682.052L551.512 679.292L568.532 712.802L583.712 742.692L587.092 749.342L602.152 783.702Z" fill="#2F2E41"/>
<g id="whole-body">
<path id="Vector_15" d="M774.562 482.572C774.162 442.412 775.342 454.042 772.162 440.212C763.622 403.032 728.172 396.252 721.992 395.412C721.334 393.66 720.322 392.062 719.02 390.717C717.718 389.372 716.152 388.31 714.422 387.596C712.691 386.883 710.832 386.533 708.961 386.568C707.089 386.603 705.245 387.024 703.542 387.802L691.711 393.938C680.241 399.188 687.202 406.772 683.242 418.742L679.082 431.442L644.992 525.672L651.892 561.522L651.902 561.542L656.552 585.692L670.34 601.4L670.082 598.892L669.772 599.372L669.762 599.382L668.962 600.572C670.072 601.182 671.173 601.782 672.253 602.382C675.053 603.922 677.783 605.432 680.443 606.912C681.083 607.272 681.712 607.622 682.342 607.982H682.352C682.752 608.202 683.153 608.422 683.542 608.642C693.522 614.222 656.582 624.382 664.792 629.152C665.932 629.812 667.062 630.472 668.172 631.122C705.972 653.232 736.133 680.772 745.883 688.772C750.243 683.492 754.472 678.102 758.572 672.602C762.292 667.632 765.896 662.576 769.383 657.432C769.993 653.412 770.402 649.392 770.802 645.452C771.282 640.712 768.782 596.802 769.622 591.972C769.992 589.832 768.572 587.802 767.202 585.842C765.932 584.012 764.732 582.292 764.982 580.672C765.242 579.002 767.082 577.182 768.872 575.412C770.822 573.472 772.843 571.472 773.133 569.362C773.933 563.482 770.642 557.582 771.262 551.662C772.282 542.032 773.066 532.372 773.612 522.682C774.382 509.302 774.699 495.932 774.562 482.572Z" fill="#6C63FF"/>
</g>
<path id="Vector_16" d="M500.298 581.062C502.305 578.946 504.753 577.296 507.467 576.228C510.181 575.16 513.097 574.7 516.008 574.881C518.919 575.062 521.755 575.878 524.317 577.274C526.878 578.669 529.103 580.609 530.833 582.957L598.545 561.926L588.298 597.317L525.568 611.863C521.431 614.509 516.467 615.545 511.617 614.775C506.767 614.006 502.367 611.484 499.253 607.687C496.138 603.891 494.524 599.083 494.716 594.176C494.909 589.269 496.895 584.603 500.298 581.062Z" fill="#FFB6B6"/>
<path id="Vector_17" d="M582.388 600.641L708.07 574.73L675.452 582.809C675.822 581.831 712.481 484.687 716.934 462.894C719.758 449.755 718.003 436.046 711.96 424.042L711.794 423.755L711.487 423.625C705.216 421.009 698.241 420.609 691.711 422.489C685.182 424.37 679.488 428.419 675.569 433.969C656.79 460.869 644.52 491.764 639.727 524.218L637.023 542.682L592.711 555.938L582.388 600.641Z" fill="#6C63FF"/>
<path id="Vector_18" d="M348.162 561.07C348.603 562.353 349.439 563.463 350.549 564.241C351.66 565.019 352.989 565.425 354.345 565.401L380.837 564.719C382.203 564.693 383.524 564.225 384.602 563.385C385.68 562.546 386.457 561.38 386.818 560.062L390.567 519.975C391.897 520.578 393.345 520.875 394.805 520.846C397.366 520.782 399.798 519.702 401.563 517.846C403.329 515.989 404.285 513.507 404.221 510.945C404.156 508.384 403.077 505.953 401.22 504.187C399.364 502.421 396.882 501.465 394.32 501.529C393.736 501.527 393.154 501.588 392.584 501.71C391.963 501.038 391.209 500.504 390.369 500.142C389.53 499.78 388.624 499.598 387.71 499.607L346.959 500.659C346.621 500.672 346.285 500.713 345.954 500.784C345.06 500.951 344.213 501.307 343.468 501.828C342.724 502.35 342.1 503.025 341.638 503.808C341.176 504.591 340.888 505.464 340.792 506.368C340.695 507.272 340.794 508.186 341.081 509.049L348.162 561.07ZM391.336 517.253L394.003 507.7C394.307 506.597 394.314 505.433 394.024 504.326C394.153 504.326 394.267 504.264 394.397 504.264C396.226 504.226 397.995 504.915 399.317 506.18C400.639 507.445 401.405 509.182 401.448 511.011C401.491 512.84 400.807 514.611 399.546 515.937C398.285 517.262 396.549 518.033 394.72 518.081C393.538 518.118 392.368 517.832 391.336 517.253Z" fill="#2F2E41"/>
<path id="Vector_19" d="M345.954 500.784C346.822 505.748 356.583 509.238 368.32 508.631C379.113 508.134 387.937 504.344 389.554 499.853C388.956 499.676 388.334 499.593 387.71 499.607L346.959 500.659C346.621 500.672 346.285 500.713 345.954 500.784V500.784Z" fill="#3F3D56"/>
<path id="Vector_20" d="M168.743 464.494V550.198C168.744 551.29 169.178 552.337 169.95 553.11C170.722 553.882 171.77 554.316 172.862 554.317H299.866C300.959 554.316 302.006 553.882 302.778 553.11C303.55 552.337 303.985 551.29 303.985 550.198V464.494C303.983 463.403 303.548 462.357 302.776 461.586C302.004 460.815 300.958 460.381 299.866 460.38H172.862C171.771 460.381 170.724 460.815 169.952 461.586C169.18 462.357 168.745 463.403 168.743 464.494V464.494Z" fill="#3F3D56"/>
<path id="Vector_21" d="M171.722 465.56V549.141C171.723 549.724 171.956 550.284 172.368 550.696C172.781 551.109 173.34 551.341 173.924 551.342H298.809C299.393 551.341 299.952 551.109 300.365 550.696C300.777 550.284 301.009 549.724 301.01 549.141V465.56C301.01 464.976 300.779 464.416 300.366 464.002C299.953 463.589 299.393 463.356 298.809 463.354H173.924C173.339 463.356 172.78 463.589 172.367 464.002C171.954 464.416 171.722 464.976 171.722 465.56V465.56Z" fill="#6C63FF"/>
<path id="Vector_22" d="M166.087 566.913C166.319 567.204 166.615 567.44 166.952 567.601C167.288 567.762 167.657 567.844 168.03 567.843H304.022C304.394 567.842 304.761 567.759 305.097 567.599C305.432 567.438 305.728 567.205 305.962 566.917C306.197 566.628 306.364 566.29 306.451 565.929C306.539 565.567 306.544 565.191 306.468 564.827L304.357 554.8C304.27 554.391 304.081 554.01 303.809 553.693C303.537 553.375 303.19 553.131 302.799 552.982C302.516 552.871 302.215 552.814 301.911 552.814H170.133C169.829 552.814 169.528 552.871 169.245 552.982C168.854 553.131 168.507 553.375 168.235 553.693C167.962 554.01 167.774 554.391 167.687 554.8L165.576 564.827C165.5 565.191 165.507 565.567 165.596 565.927C165.684 566.288 165.852 566.625 166.087 566.913V566.913Z" fill="#2F2E41"/>
<path id="Vector_23" d="M297.245 557.133H300.457C300.727 557.133 300.945 556.915 300.945 556.645V555.108C300.945 554.839 300.727 554.62 300.457 554.62H297.245C296.975 554.62 296.757 554.839 296.757 555.108V556.645C296.757 556.915 296.975 557.133 297.245 557.133Z" fill="#3F3D56"/>
<path id="Vector_24" d="M288.868 557.133H292.08C292.35 557.133 292.568 556.915 292.568 556.645V555.108C292.568 554.839 292.35 554.62 292.08 554.62H288.868C288.598 554.62 288.38 554.839 288.38 555.108V556.645C288.38 556.915 288.598 557.133 288.868 557.133Z" fill="#3F3D56"/>
<path id="Vector_25" d="M280.491 557.133H283.703C283.973 557.133 284.191 556.915 284.191 556.645V555.108C284.191 554.839 283.973 554.62 283.703 554.62H280.491C280.221 554.62 280.003 554.839 280.003 555.108V556.645C280.003 556.915 280.221 557.133 280.491 557.133Z" fill="#3F3D56"/>
<path id="Vector_26" d="M272.114 557.133H275.326C275.596 557.133 275.814 556.915 275.814 556.645V555.108C275.814 554.839 275.596 554.62 275.326 554.62H272.114C271.844 554.62 271.626 554.839 271.626 555.108V556.645C271.626 556.915 271.844 557.133 272.114 557.133Z" fill="#3F3D56"/>
<path id="Vector_27" d="M263.737 557.133H266.949C267.219 557.133 267.437 556.915 267.437 556.645V555.108C267.437 554.839 267.219 554.62 266.949 554.62H263.737C263.467 554.62 263.249 554.839 263.249 555.108V556.645C263.249 556.915 263.467 557.133 263.737 557.133Z" fill="#3F3D56"/>
<path id="Vector_28" d="M255.36 557.133H258.572C258.842 557.133 259.06 556.915 259.06 556.645V555.108C259.06 554.839 258.842 554.62 258.572 554.62H255.36C255.09 554.62 254.872 554.839 254.872 555.108V556.645C254.872 556.915 255.09 557.133 255.36 557.133Z" fill="#3F3D56"/>
<path id="Vector_29" d="M246.983 557.133H250.195C250.465 557.133 250.683 556.915 250.683 556.645V555.108C250.683 554.839 250.465 554.62 250.195 554.62H246.983C246.713 554.62 246.495 554.839 246.495 555.108V556.645C246.495 556.915 246.713 557.133 246.983 557.133Z" fill="#3F3D56"/>
<path id="Vector_30" d="M238.606 557.133H241.818C242.088 557.133 242.306 556.915 242.306 556.645V555.108C242.306 554.839 242.088 554.62 241.818 554.62H238.606C238.336 554.62 238.118 554.839 238.118 555.108V556.645C238.118 556.915 238.336 557.133 238.606 557.133Z" fill="#3F3D56"/>
<path id="Vector_31" d="M230.229 557.133H233.441C233.711 557.133 233.929 556.915 233.929 556.645V555.108C233.929 554.839 233.711 554.62 233.441 554.62H230.229C229.959 554.62 229.741 554.839 229.741 555.108V556.645C229.741 556.915 229.959 557.133 230.229 557.133Z" fill="#3F3D56"/>
<path id="Vector_32" d="M221.852 557.133H225.064C225.334 557.133 225.552 556.915 225.552 556.645V555.108C225.552 554.839 225.334 554.62 225.064 554.62H221.852C221.582 554.62 221.364 554.839 221.364 555.108V556.645C221.364 556.915 221.582 557.133 221.852 557.133Z" fill="#3F3D56"/>
<path id="Vector_33" d="M213.475 557.133H216.687C216.957 557.133 217.175 556.915 217.175 556.645V555.108C217.175 554.839 216.957 554.62 216.687 554.62H213.475C213.205 554.62 212.987 554.839 212.987 555.108V556.645C212.987 556.915 213.205 557.133 213.475 557.133Z" fill="#3F3D56"/>
<path id="Vector_34" d="M205.098 557.133H208.31C208.58 557.133 208.798 556.915 208.798 556.645V555.108C208.798 554.839 208.58 554.62 208.31 554.62H205.098C204.828 554.62 204.61 554.839 204.61 555.108V556.645C204.61 556.915 204.828 557.133 205.098 557.133Z" fill="#3F3D56"/>
<path id="Vector_35" d="M196.721 557.133H199.933C200.203 557.133 200.421 556.915 200.421 556.645V555.108C200.421 554.839 200.203 554.62 199.933 554.62H196.721C196.451 554.62 196.233 554.839 196.233 555.108V556.645C196.233 556.915 196.451 557.133 196.721 557.133Z" fill="#3F3D56"/>
<path id="Vector_36" d="M188.344 557.133H191.556C191.826 557.133 192.044 556.915 192.044 556.645V555.108C192.044 554.839 191.826 554.62 191.556 554.62H188.344C188.074 554.62 187.856 554.839 187.856 555.108V556.645C187.856 556.915 188.074 557.133 188.344 557.133Z" fill="#3F3D56"/>
<path id="Vector_37" d="M179.967 557.133H183.179C183.449 557.133 183.667 556.915 183.667 556.645V555.108C183.667 554.839 183.449 554.62 183.179 554.62H179.967C179.697 554.62 179.479 554.839 179.479 555.108V556.645C179.479 556.915 179.697 557.133 179.967 557.133Z" fill="#3F3D56"/>
<path id="Vector_38" d="M171.59 557.133H174.802C175.072 557.133 175.29 556.915 175.29 556.645V555.108C175.29 554.839 175.072 554.62 174.802 554.62H171.59C171.32 554.62 171.102 554.839 171.102 555.108V556.645C171.102 556.915 171.32 557.133 171.59 557.133Z" fill="#3F3D56"/>
<path id="Vector_39" d="M297.344 561.322H300.556C300.826 561.322 301.044 561.103 301.044 560.833V559.297C301.044 559.027 300.826 558.809 300.556 558.809H297.344C297.074 558.809 296.856 559.027 296.856 559.297V560.833C296.856 561.103 297.074 561.322 297.344 561.322Z" fill="#3F3D56"/>
<path id="Vector_40" d="M288.967 561.322H292.179C292.449 561.322 292.667 561.103 292.667 560.833V559.297C292.667 559.027 292.449 558.809 292.179 558.809H288.967C288.697 558.809 288.479 559.027 288.479 559.297V560.833C288.479 561.103 288.697 561.322 288.967 561.322Z" fill="#3F3D56"/>
<path id="Vector_41" d="M280.59 561.322H283.802C284.072 561.322 284.29 561.103 284.29 560.833V559.297C284.29 559.027 284.072 558.809 283.802 558.809H280.59C280.32 558.809 280.102 559.027 280.102 559.297V560.833C280.102 561.103 280.32 561.322 280.59 561.322Z" fill="#3F3D56"/>
<path id="Vector_42" d="M272.213 561.322H275.425C275.695 561.322 275.913 561.103 275.913 560.833V559.297C275.913 559.027 275.695 558.809 275.425 558.809H272.213C271.943 558.809 271.725 559.027 271.725 559.297V560.833C271.725 561.103 271.943 561.322 272.213 561.322Z" fill="#3F3D56"/>
<path id="Vector_43" d="M263.836 561.322H267.048C267.318 561.322 267.536 561.103 267.536 560.833V559.297C267.536 559.027 267.318 558.809 267.048 558.809H263.836C263.566 558.809 263.348 559.027 263.348 559.297V560.833C263.348 561.103 263.566 561.322 263.836 561.322Z" fill="#3F3D56"/>
<path id="Vector_44" d="M255.459 561.322H258.671C258.941 561.322 259.159 561.103 259.159 560.833V559.297C259.159 559.027 258.941 558.809 258.671 558.809H255.459C255.189 558.809 254.971 559.027 254.971 559.297V560.833C254.971 561.103 255.189 561.322 255.459 561.322Z" fill="#3F3D56"/>
<path id="Vector_45" d="M247.082 561.322H250.294C250.564 561.322 250.782 561.103 250.782 560.833V559.297C250.782 559.027 250.564 558.809 250.294 558.809H247.082C246.812 558.809 246.594 559.027 246.594 559.297V560.833C246.594 561.103 246.812 561.322 247.082 561.322Z" fill="#3F3D56"/>
<path id="Vector_46" d="M238.705 561.322H241.917C242.187 561.322 242.405 561.103 242.405 560.833V559.297C242.405 559.027 242.187 558.809 241.917 558.809H238.705C238.435 558.809 238.217 559.027 238.217 559.297V560.833C238.217 561.103 238.435 561.322 238.705 561.322Z" fill="#3F3D56"/>
<path id="Vector_47" d="M230.328 561.322H233.54C233.81 561.322 234.028 561.103 234.028 560.833V559.297C234.028 559.027 233.81 558.809 233.54 558.809H230.328C230.058 558.809 229.84 559.027 229.84 559.297V560.833C229.84 561.103 230.058 561.322 230.328 561.322Z" fill="#3F3D56"/>
<path id="Vector_48" d="M221.951 561.322H225.163C225.433 561.322 225.651 561.103 225.651 560.833V559.297C225.651 559.027 225.433 558.809 225.163 558.809H221.951C221.681 558.809 221.463 559.027 221.463 559.297V560.833C221.463 561.103 221.681 561.322 221.951 561.322Z" fill="#3F3D56"/>
<path id="Vector_49" d="M213.574 561.322H216.786C217.056 561.322 217.274 561.103 217.274 560.833V559.297C217.274 559.027 217.056 558.809 216.786 558.809H213.574C213.304 558.809 213.086 559.027 213.086 559.297V560.833C213.086 561.103 213.304 561.322 213.574 561.322Z" fill="#3F3D56"/>
<path id="Vector_50" d="M205.197 561.322H208.409C208.679 561.322 208.897 561.103 208.897 560.833V559.297C208.897 559.027 208.679 558.809 208.409 558.809H205.197C204.927 558.809 204.709 559.027 204.709 559.297V560.833C204.709 561.103 204.927 561.322 205.197 561.322Z" fill="#3F3D56"/>
<path id="Vector_51" d="M196.82 561.322H200.032C200.302 561.322 200.52 561.103 200.52 560.833V559.297C200.52 559.027 200.302 558.809 200.032 558.809H196.82C196.55 558.809 196.332 559.027 196.332 559.297V560.833C196.332 561.103 196.55 561.322 196.82 561.322Z" fill="#3F3D56"/>
<path id="Vector_52" d="M188.443 561.322H191.655C191.925 561.322 192.143 561.103 192.143 560.833V559.297C192.143 559.027 191.925 558.809 191.655 558.809H188.443C188.173 558.809 187.955 559.027 187.955 559.297V560.833C187.955 561.103 188.173 561.322 188.443 561.322Z" fill="#3F3D56"/>
<path id="Vector_53" d="M180.066 561.322H183.278C183.548 561.322 183.766 561.103 183.766 560.833V559.297C183.766 559.027 183.548 558.809 183.278 558.809H180.066C179.796 558.809 179.578 559.027 179.578 559.297V560.833C179.578 561.103 179.796 561.322 180.066 561.322Z" fill="#3F3D56"/>
<path id="Vector_54" d="M171.689 561.322H174.901C175.171 561.322 175.389 561.103 175.389 560.833V559.297C175.389 559.027 175.171 558.809 174.901 558.809H171.689C171.419 558.809 171.201 559.027 171.201 559.297V560.833C171.201 561.103 171.419 561.322 171.689 561.322Z" fill="#3F3D56"/>
<path id="Vector_55" d="M468.34 572.587C468.766 572.775 469.142 573.06 469.438 573.419C469.734 573.779 469.942 574.203 470.044 574.657L467.122 575.326L468.34 572.587Z" fill="#3F3D56"/>
<g id="hair-and-head">
<path id="Vector_56" d="M687.764 380.054C714.62 380.054 736.39 358.283 736.39 331.428C736.39 304.573 714.62 282.803 687.764 282.803C660.909 282.803 639.139 304.573 639.139 331.428C639.139 358.283 660.909 380.054 687.764 380.054Z" fill="#FFB6B6"/>
<path id="Vector_57" d="M843.82 402.98C838.46 411 829.88 416.55 820.64 419.3C816.887 420.417 813.012 421.075 809.1 421.26C808.617 416.837 807.46 412.513 805.67 408.44C805.852 412.776 805.249 417.109 803.89 421.23C798.016 420.897 792.274 419.358 787.02 416.71C776.77 411.46 768.88 401.42 767.13 390.03C765.07 376.73 771.1 363.67 773.28 350.39C775.47 337.11 771.36 320.29 758.36 316.8C748.46 314.14 749.57 315.29 741.34 321.4C749.901 334.058 718.28 380.445 705.34 376.4C698.024 374.113 693.34 367.4 691.83 367.4C681.66 384.92 700.81 414.44 681.51 420.57L683.1 418.98C694.75 404.65 670.4 374.32 682.05 359.99C685.3 355.98 688.76 351.23 687.8 346.16C686.89 341.34 679.24 338.79 677 342.75C681.03 333.52 675.08 321.2 665.23 318.83C656.48 316.72 656.64 319.32 647.86 320.45C647.286 316.656 646.214 312.953 644.67 309.44C644.831 313.226 644.389 317.013 643.36 320.66C640.258 320.599 637.263 319.517 634.84 317.58C627.68 311.81 629.13 299.69 635.52 293.08C641.92 286.47 651.43 284.09 660.5 282.55C663.137 264.189 713.795 262.274 720.51 280.62C723.37 266.92 740.52 259.81 753.85 264.06C767.18 268.31 776.43 280.76 781.3 293.88C786.17 306.99 787.53 321.1 790.53 334.76C793.53 348.42 798.6 362.33 809.04 371.64C819.48 380.94 836.49 384.02 847.49 375.38C850.96 384.38 849.17 394.95 843.82 402.98Z" fill="#2F2E41"/>
</g>
</g>
<defs>
<clipPath id="clip0_2_3">
<rect width="849.273" height="842.002" fill="white"/>
</clipPath>
</defs>
</svg>


        </div>
    </div>
  )
}
export default Lofi;