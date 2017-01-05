/**
 * Created by OlyLis on 2016/12/30.
 */
window.onscroll = function() {
    var y_location = document.documentElement.scrollTop || document.body.scrollTop;
    // isScrollDown = y_location > old_location;
    // console.log(y_location);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.body.scrollTop);
    if(y_location > 40) {
        //改变导航栏底色

        if(y_location > 515 && y_location < 1030) {
            // 移动到Story
            scrollToNext(0);
        }else if(y_location > 1545 && y_location < 2060) {
            // 移动到Skill
            scrollToNext(1030);
        }else if(y_location > 2575 && y_location < 3090) {
            // 移动到Exp
            scrollToNext(2060);
        }else if(y_location > 3605 && y_location < 4120) {
            // 移动到Contact
            scrollToNext(3090);
        }else {

        }
    }
};

function scrollTop() {
    document.body.scrollTop = 0;
}

function scrollTo(y_location) {
    document.body.scrollTop = y_location;
}

//伪动画，平滑滚动
function scrollToNext(original_location) {
    var offset = document.body.scrollTop - original_location;
    offset *= 1.03;
    document.body.scrollTop = original_location + offset;
}