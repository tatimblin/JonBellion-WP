			<footer class="footer-artist footer-mixtape" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

            <h1>The Mixtapes</h1>
            
				<div id="artist-inner" class="wrap cf artist-inner">
                       
                    <div class="mixtape-item mixtape1">
                        <?php 
                            $my_query = new WP_Query('page_id=155');
                            if (have_posts()) : while ($my_query->have_posts()) : $my_query->the_post();
                            $do_not_duplicate = $post->ID;

                            the_post_thumbnail('medium');
                            the_content();
                            endwhile; endif;
                        ?>
                    </div>
                    <div class="mixtape-item mixtape2">
                        <?php 
                            $my_query = new WP_Query('page_id=157');
                            if (have_posts()) : while ($my_query->have_posts()) : $my_query->the_post();
                            $do_not_duplicate = $post->ID;

                            the_post_thumbnail('medium');
                            the_content();
                            endwhile; endif;
                        ?>
                    </div>

				</div>

			</footer>

		</div>


		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>












	</body>

</html> <!-- end of site. what a ride! -->
