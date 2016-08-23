<?php
/*
 Template Name: Music Page
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

			<div id="content">
                <div class="bg-hero bg-music-hero">
                                
                </div>
				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
                            <div class="music_wrap">
							
                                <?php
                                    the_content();
                                ?>
                           
                            </div>
							
                        </main>

					<?php get_sidebar(); ?>

				</div>

			</div>

<?php get_footer(mixtape); ?>
<?php get_footer(); ?>
