<script>
console.log('Script is running');
    document.getElementById('downloadPdfEurogrip').addEventListener('click', function () {
        var pdfPath = '../assets/pdf/HIKMA.pdf'; // Replace with the actual path to your EUROGRIP TYRE PDF file

        var tempLink = document.createElement('a');
        tempLink.href = pdfPath;
        tempLink.setAttribute('download', 'eurogrip_tyre.pdf');
        tempLink.style.display = 'none';

        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
</script>