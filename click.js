const $button = document.querySelector("#notice");
        $button.children[1].addEventListener("click" , close1);
        
        function close1() {
            $button.style.display = 'none';
        }

        function open1() {
            $button.style.display = 'block';
        }

        //function red1() {
        //    document.getElementById("red").style.background = 'red';
        //}

        const $sub = document.querySelector("#red");

        function red1() {
            $sub.style.background = 'red';
        }

        const $sub1 = document.querySelector("#blue");

        $sub1.addEventListener("click" , blue);
        function blue() {
            $sub1.style.background = 'skyblue';
        }
        
        const $sub2 = document.querySelector("#pink a");

        function pink1() {
            $sub2.style.color = 'pink';
        }

        const $back1 = document.querySelector("#notice");

        $back1.addEventListener("click" , green);
        function green() {
            $back1.style.background = 'green';
        }