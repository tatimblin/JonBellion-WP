<?php
/*
 Template Name: Covers Page
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
                <div class="bg-hero bg-cover-hero">
                                
                </div>
				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
                            <div class="Cover_wrap">
							<?php
                            if (is_page()) {
                              $cat=get_cat_ID($post->post_title); //use page title to get a category ID
                              $posts = get_posts ("cat=$cat&showposts=15");
                              if ($posts) {
                                foreach ($posts as $post):
                                  setup_postdata($post); ?>
                                   <div class="Cover-item">
                                        <div class="Cover-post-img">
                                            <div class="Cover-feat-img" data-nav-item="<?php the_ID(); ?>">
                                                <?php the_post_thumbnail('large'); ?>
                                            </div>
                                        </div>
                                        <div class="Cover-links">
                                            <h2>
                                                <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>
                                            </h2>
                                            <a class="Cover-download" href="http://timblin.co/drexel/wbdv243/wp-content/uploads/2016/06/TheHumanCondition.jpg"><img src="http://timblin.co/drexel/wbdv243/wp-content/uploads/2016/08/download_icon.png"></a>
                                        </div>
                                    </div>
                                  
                                <?php endforeach;
                              }
                            }
                            ?>
                            </div>
							
                        </main>

					<?php get_sidebar(); ?>

				</div>

			</div>

<?php get_footer(artist); ?>
<?php get_footer(); ?>
