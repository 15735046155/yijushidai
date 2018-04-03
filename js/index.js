

//banner
{
    $(".banner_1").mouseenter(function () {
        let index = $(this).index(".banner_1");
        $(".banner_lan").removeClass("active").eq(index).addClass("active");
        $(".banner-img").removeClass("active1").eq(index).addClass("active1");
        n = index;
    })

    let n = 0;
    let l = $(".banner-img").length;

    let st = setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".banner_lan").removeClass("active").eq(n).addClass("active");
        $(".banner-img").removeClass("active1").eq(n).addClass("active1");

    }

    $(".banner_center").mouseenter(function () {
        clearInterval(st);
    });
    $(".banner_center").mouseleave(function () {
        st = setInterval(move, 3000);
    })
}
//btn
{
    let n=0;
    $(".al_rjt").click(function () {
        n++;
        if(n>1){
            $("al_rjt").addClass(".active2");
        }
        $("al-img").cssText(

        )
    })
}
