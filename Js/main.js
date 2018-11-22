new WOW().init();


/*Fixing canvases*/
    var temp = 0;
    window.onscroll = function () {
        if ((window.pageYOffset > 2200) && (window.pageYOffset < 3300)  && (temp === 0) ) {
            temp++;
            var counter = document.getElementById('counter').getContext('2d');
            var counter2 = document.getElementById('counter2').getContext('2d');
            var counter3 = document.getElementById('counter3').getContext('2d');
            var counter4 = document.getElementById('counter4').getContext('2d');


            var no = 0; // Starting Point
            var no_2 = 0;
            var no_3 = 0;
            var no_4 = 0;
            var pointToFill = 4.72;  //Point from where you want to fill the circle
            var cw = counter.canvas.width;  //Return canvas width
            var ch = counter.canvas.height; //Return canvas height
            var cw2 = counter2.canvas.width;  //Return canvas width2
            var ch2 = counter2.canvas.height;//Return canvas height2
            var cw3 = counter3.canvas.width;  //Return canvas width3
            var ch3 = counter3.canvas.height;//Return canvas height3
            var cw4 = counter4.canvas.width;  //Return canvas width4
            var ch4 = counter4.canvas.height;//Return canvas height4

            var diff, diff2;   // find the different between current value (no) and trageted value (100)

            function fillCounter() {
                diff = ((no / 100) * Math.PI * 2 * 10);
                diff2 = ((no_2 / 100) * Math.PI * 2 * 10);

                counter.clearRect(0, 0, cw, ch);   // Clear canvas every time when function is call
                counter2.clearRect(0, 0, cw2, ch2);
                counter3.clearRect(0, 0, cw2, ch2);
                counter4.clearRect(0, 0, cw2, ch2);


                counter.lineWidth = 15;     // size of stroke
                counter2.lineWidth = 15;
                counter3.lineWidth = 15;
                counter4.lineWidth = 15;

                counter.fillStyle = '#66666a';     // color that you want to fill in counter/circle
                counter2.fillStyle = '#66666a';
                counter3.fillStyle = '#66666a';
                counter4.fillStyle = '#66666a';

                counter.strokeStyle = '#ff5252';    // Stroke Color
                counter2.strokeStyle = '#ff5252';
                counter3.strokeStyle = '#ff5252';
                counter4.strokeStyle = '#ff5252';

                counter.textAlign = 'center';
                counter2.textAlign = 'center';
                counter3.textAlign = 'center';
                counter4.textAlign = 'center';

                counter.font = "33px Arial sans-serif";//set font size and face
                counter2.font = "33px Arial sans-serif";
                counter3.font = "33px Arial sans-serif";
                counter4.font = "33px Arial sans-serif ";

                counter.fillText("90%", 100, 110);       //fillText(text,x,y);
                counter2.fillText("87%", 100, 110);
                counter3.fillText("70%", 100, 110);
                counter4.fillText("84%", 100, 110);

                counter.beginPath();
                counter2.beginPath();
                counter3.beginPath();
                counter4.beginPath();

                counter.arc(102, 100, 90, pointToFill, diff / 10 + pointToFill);    //arc(x,y,radius,start,stop)
                counter2.arc(102, 100, 90, pointToFill, diff / 11 + pointToFill);
                counter3.arc(102, 100, 90, pointToFill, diff / 13 + pointToFill);
                counter4.arc(102, 100, 90, pointToFill, diff / 12 + pointToFill);

                counter.stroke();   // to fill stroke
                counter2.stroke();
                counter3.stroke();
                counter4.stroke();

                // now add condition

                if (no >= 90) {
                    clearTimeout(fill);     //fill is a variable that call the function fillcounter()
                }

                no++;
            }

//now call the function

            var fill = setInterval(fillCounter, 23);     //call the fillCounter function after every 30MS////

        }
    };






