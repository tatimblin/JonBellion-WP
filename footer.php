			<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">

				<div id="inner-footer" class="wrap cf">
                    <div class="footer-nav_wrap">
<!--					<nav role="navigation">
						<?php wp_nav_menu(array(
    					'container' => 'div',                           // enter '' to remove nav container (just make sure .footer-links in _base.scss isn't wrapping)
    					'container_class' => 'footer-links cf',         // class of container (should you choose to use it)
    					'menu' => __( 'Footer Links', 'bonestheme' ),   // nav name
    					'menu_class' => 'nav footer-nav cf',            // adding custom nav class
    					'theme_location' => 'footer-links',             // where it's located in the theme
    					'before' => '',                                 // before the menu
    					'after' => '',                                  // after the menu
    					'link_before' => '',                            // before each link
    					'link_after' => '',                             // after each link
    					'depth' => 0,                                   // limit the depth of the nav
    					'fallback_cb' => 'bones_footer_links_fallback'  // fallback function
						)); ?>
					</nav>
-->
					<div role="navigation" class="fnav">
						<?php wp_nav_menu(array(
    					'theme_location' => 'footer-links',
                        'container_class' => 'footer-menu footer-links'
						)); ?>
					</div>
					
<!-- ************************* -->
											
					
                                <div class="buyHere footerBuyHere">
                                    <ul>
                                        <li><img src="https://lh3.googleusercontent.com/gdBHEk-u3YRDtuCU3iDTQ52nZd1t4GPmldYaT26Jh6EhXgp1mlhQiuLFl4eXDAXzDig5=w300"></li>
                                        <li><img src="http://cdn.osxdaily.com/wp-content/uploads/2010/10/giant-apple-logo-bw.png"></li>
                                        <li><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/SoundCloud_logo.svg/1280px-SoundCloud_logo.svg.png"></li>
                                        <li><img src="https://blog.zen.co.uk/wp-content/uploads/2016/04/spotify-icon-14523.png">         </li>
                                  </ul>
                            </div>
                            
                    
<!-- **************************** -->
					
					<div role="navigation" class="fnav">
						<?wp_nav_menu( array( 
                        'theme_location' => 'footer-ext',
                        'container_class' => 'footer-menu footer-ext' 
                    ) ); ?>

					</div>
				</div>

					<p class="source-org copyright">&copy; <?php echo date('Y'); ?> <?php// bloginfo( 'name' ); ?>/
					    Created by Tristan Timblin. <br/>
					    Not Affiliated with Jon Bellion or David Lojaya.
					</p>

				</div>

			</footer>

		</div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
        <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>-->
        
        <script src="//w.soundcloud.com/player/api.js"></script>

        <script src="../js/main.js"></script>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>












	</body>

</html> <!-- end of site. what a ride! -->
