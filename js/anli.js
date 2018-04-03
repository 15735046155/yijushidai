{
    $(".wc_biaoti1")
        .mouseenter(function () {
            let index = $(this).index(".wc_biaoti1");
            $(".jindutiao").removeClass("active2").eq(index).addClass("active2");
            $(".yangtai").removeClass("active1").eq(index).addClass("active1");
        })
}
//翻页
// {
//     let next = document.querySelector(".finish_bottom_jiantou_you");
//     let prev = document.querySelector(".finish_bottom_jiantou_zuo");
//     let inner = document.querySelector(".inner");
//     let pager = document.querySelectorAll(".finish_bottom_jiantou_shuzi");
//     let n = 0;
//     next.onclick = function () {
//         n++;
//         if (n === pager.length) {
//             n = pager.length - 1;
//             return;
//         }
//         inner.style.transition="all 1s";
//         inner.style.marginLeft = n * -996 + "px";
//         pager[n].classList.add("active");
//         pager[n - 1].classList.remove("active");
//         obj = pager[n];
//     };
//     prev.onclick = function () {
//         n--;
//         if (n < 0) {
//             n = 0;
//             return;
//         }
//         inner.style.marginLeft = n * -996 + "px";
//         pager[n].classList.add("active");
//         pager[n + 1].classList.remove("active");
//         obj = pager[n];
//     };
//     let obj = pager[0];
//     pager.forEach(function (ele, index) {
//         ele.onclick = function () {
//             obj.classList.remove("active");
//             ele.classList.add("active");
//             obj = ele;
//             inner.style.marginLeft = index * -996 + "px";
//             n = index;
//         }
//     })
// }
