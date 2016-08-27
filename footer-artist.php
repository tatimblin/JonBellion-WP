			<footer class="footer-artist" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div id="artist-inner" class="wrap cf artist-inner">

                   <?php 
                        $my_query = new WP_Query('page_id=146');
                        if (have_posts()) : while ($my_query->have_posts()) : $my_query->the_post();
                        $do_not_duplicate = $post->ID;
                    ?>
                    <div class="artist-item artist_img">
                        <?php
                            the_post_thumbnail('medium');
                        ?>
                    </div>
                    <div class="artist-item artist_desc">
                       
                        
                     <?php   
                        the_content();
                        
                        endwhile; endif;
                        ?>
                        <!--<h1>David Ardinaryas Loyala</h1>
                        <p>
                            David was comissioned by Jon Bellion for the creation of fourteen song covers and the album cover for "The Human Condition". The cover art was largely in line with David's established and successful style.
                        </p>-->
                    </div>

				</div>

			</footer>

		</div>


		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>












	</body>

</html> <!-- end of site. what a ride! -->
