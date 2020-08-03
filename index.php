
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Color Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/gradient.css">
    <script src="assets/gradient.js"></script>
    
</head>
<body class="dynamic-bg"> 
    <div class="gradient-section"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                    <div class="card">  
                        <div id="gradient" class="card-img-top">
                        </div>
                        <div class="card-body" >
                            <h6>Code: <button id="changeColor" class="btn btn-link" title="Change Color"><i class="fas fa-sync "></i></button> <button id="rotateColor" class="btn btn-link" title="Rotate Color"><i class="fas fa-undo "></i></button>  </h6>
                                <code id="gradientCode">
                                    <p><span class="property">background:</span> <span id="single-color" class="color-code">#3F5EFB</span></p>
                                    <p><span class="property">background:</span> <span class="property-function">linear-gradient (to <span id="dir-linear">right</span>,<span id="multi-color-linear" class='color-code'> #3F5EFB, #FC466B</span>); </span></p>
                                    <p><span class="property">background:</span> <span class="property-function">-webkit-linear-gradient (to <span id="dir-webkit">right</span>,<span id="multi-color-webkit" class='color-code'> #3F5EFB, #FC466B</span>); </span></p>
                                </code>
                            
                            <div class="mx-auto mt-3">
                                <button id="copybtn" class="btn btn-copy">Copy to Clipboard</button>
                            </div> 
                            
                        </div>
                    </div>
                </div>
                

                <div class="col-lg-3"></div>
            </div>
        </div>
    </div>
</body>
</html>

        


