<!DOCTYPE html>
<html lang="en" ng-app="smsApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Command & Control Messages</title>
    <link rel="stylesheet" href="css/app.css">
    <script src="js/angular.js"></script>
    <script src="js/angular-route.js"></script>
    <script src="js/angular-resource.js"></script>
    <script src="js/angular-animate.js"></script>
    <script src="js/app.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
    <header>
        <div ng-controller="navController"> 
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>-->
                        <a class="navbar-brand" href="#/">Command & Control Messages</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <!--<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div> /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </div>
    </header>
    <main class="container">
        <div ng-view></div>
    </main>
    <footer>
        
    </footer>   
</body>
</html>