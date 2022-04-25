pdf="$HOME/Tools/Misc/pdfcpu"
base="$HOME/Downloads"
en="$base/en.pdf"
zh="$base/zh.pdf"
out="$base/Resume.pdf"

rm -f $out
node crawler/genPDF.js
$pdf merge $out $en $zh
rm $en $zh