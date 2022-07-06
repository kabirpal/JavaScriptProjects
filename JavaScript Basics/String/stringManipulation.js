let str1 = "Day 2nd of learning JavaScript";
        function counting(){
            let str2 = str1.length;
            document.getElementById("demo").innerHTML = str2;
        }

        function slicing(){
            //similar to slicing there is also substr and substring
            document.getElementById('demo').innerHTML = str1.slice(4,10); 
        }

        function replacing(){
            document.getElementById("demo").innerHTML = str1.replace("JavaScript","Web Development");
        }

        function Uppercase(){
            document.getElementById('demo').innerHTML = str1.toUpperCase();
        }

        
        function Lowercase(){
            document.getElementById('demo').innerHTML = str1.toLowerCase();
        }


        //Using padding. It is used to add prefix and suffix to a string.
        function padding(){
            let str3 = 2;
            let str5 = str3.toString(); //converting num to string before applying padStart
            let str4 = str5.padStart(2,0); //Similar to pad start there is also padEnd
            document.getElementById("demo").innerHTML = str1.replace("2nd",str4); 
        }

        function charat(){
            document.getElementById('demo').innerHTML = str1.charAt(0);
        }