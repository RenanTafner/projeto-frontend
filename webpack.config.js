const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = { 

	entry: [path.join(__dirname, 'src/js/main.js'), path.join(__dirname, 'src/js/plugin.js') , path.join(__dirname, 'src/js/vendor/modernizr-3.11.2.min.js') ],	        

	output: { 

		path: path.join(__dirname, 'dist'),
		
		filename: 'bundle.js' 

	},

	resolve: { 

		extensions: [".js", ".jsx"] 

	},


	plugins: [ 

		new HtmlWebpackPlugin({ 

			filename: 'index.html', 

			template: path.join(__dirname, 'src/index.html') 

		}),

		new ExtractTextPlugin('style.css'),

		new UglifyJSPlugin()

		],

	module: { 

		rules: [ 

			{ 

				test: /.jsx?$/, 

				exclude: /node_modules/, 

				include: path.join(__dirname, 'src'), 

				use: [ 

					{ 

						loader: 'babel-loader', 

						options: { 

							presets: ['es2015']

						} 

					} 
				     ] 

			},

			{

				 test: /\.css$/,

				use: ExtractTextPlugin.extract({ 

					fallback: "style-loader", 

					use: "css-loader" 

				})

			},
 			{

        			test: /\.s[ac]ss$/i,

        			use: [

          			'style-loader',

          			 {
                    		
                    		loader: 'css-loader',
                    		
				options: {
                        

					modules: true
                    		
					}		
                

				},

          			{

					loader: 'sass-loader',

					options: {

                       			sassOptions: {

                            		includePaths: [path.join(__dirname, 'src/scss')]
                        		
					}

				 }



				},

        			]

      			},

		       ] 

	},

	devServer: { 

		publicPath: "/", 

		contentBase: "./dist" 

	}

};