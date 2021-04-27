<?php date_default_timezone_set('Asia/Bangkok'); $valUpdate="?v=".date('Ymd').time();?>
<!DOCTYPE html>
<html lang="EN">

<head>
    <?php 
	include('inc/metatag.php');
	include('inc/loadcss.php');
	?>
</head>

<style>
    .main{margin: 0 auto; width: 768px; padding: 0; position: relative;}
    #sticky {
        float: left;
        width: 200px;
        color: #ce8888;
        position: relative;
        will-change: min-height;
    }
    #sticky .sticky-inner {
        border: 1px dotted red;
        background-color: rgba(255, 0, 0, 0.01);
        padding: 10px;
        transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
        will-change: position, transform;
    }
    #content {
        border: 1px dotted green;
        padding: 18px;
        margin-left: 215px;
        min-height: 800px;
        color: darkgrey;
    }
</style>

<body>

    <?php include('inc/preloader.php'); ?>
    
    <div class="global-container">
        <?php include('inc/header.php'); ?>

        <section class="site-container">
            <div class="brand">
                <div class="logo">
                    <img src="assets/img/static/brand.svg" class="lazy" alt="">
                </div>
                <div class="logo-txt">&#60;guide/dev&#62;</div>
            </div>
        </section>

        <?php
        	include('inc/footer.php');
        	include('inc/modal.php');
        ?>
    </div>

    <?php include('inc/loadscript.php'); ?>

    <script>
    </script>

</body>

</html>