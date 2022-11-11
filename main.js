// This is your wrapper function
(function () {

  // This is a jQuery line that says:
  // When the document is ready, run the 'init' function
  $(document).ready(init);


  function init() {
    console.log("HTML page is ready!");
    // load_home(); // this call the load_home function
    

  }

  function load_home() {

    // $('#content').load("components/nav.html");

    // document.getElementById("content").innerHTML =
    //   '<object type="text/html" data="components/nav.html" ></object>';
  }



})();


// This throws a CORs error in dev mode
// Difficult stuff to understand but you can fix it with an <object />

{/* <script>
$(function(){
  $("#nav-placeholder").load("nav.html");
  });

  function load_home() {
   document.getElementById("content").innerHTML='<object type="text/html" data="nav.html" ></object>';
}
  </script> */}
