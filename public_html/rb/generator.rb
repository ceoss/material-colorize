$buffer = ""
$colorNames=Array.new
$colors=Array.new
def recordColors(name,color)
	$colorNames << name
	$colors << color
end

def create()
	$colors.each do |color|
		colorID = $colors.index(color)
		colorName = $colorNames.fetch(colorID)
		colorNoPound = color.gsub(/#/,"")
		colorAlpha = color.gsub(/$/,"ff")
		colorAlphaWithoutPound = color.gsub(/#/,"").gsub(/$/,"ff")
		colorRGB = color.gsub(/#(..)(..)(..)/) {|m| "rgb(#{$1.hex},#{$2.hex},#{$3.hex})"}
		colorRGBNoFormatting = color.gsub(/#(..)(..)(..)/) {|m| "#{$1.hex},#{$2.hex},#{$3.hex}"}
		colorRGBA = color.gsub(/#(..)(..)(..)/) {|m| "rgba(#{$1.hex},#{$2.hex},#{$3.hex},1)"}
		colorRGBANoFormatting = color.gsub(/#(..)(..)(..)/) {|m| "#{$1.hex},#{$2.hex},#{$3.hex},1"}
		colorRGBSpace = color.gsub(/#(..)(..)(..)/) {|m| "#{$1.hex} #{$2.hex} #{$3.hex}"}
		correctColorName = colorName.gsub(/-/," ").gsub(/(\w+)/) {|w| w.capitalize}
		File.open("template.html", "r") do |input|
			while line = input.gets do
				$buffer << line.gsub(/#f44336/i,colorRGBNoFormatting).gsub(/red-500/,colorName).gsub(/Red 500/,correctColorName) #change color type in first gsub
			end
		end
	end
	File.open("output.html", "w+") do |output|
		output.print $buffer
	end
end

if File.exist?("colors.txt") then
	File.open("colors.txt", "r") do |input|
		while line = input.gets do
			line.match(/(^[^\s]*)(\s+)(.*)/) {|c| recordColors($1,$3)}
		end
	end
else
end

create()