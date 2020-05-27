$('#summernote').summernote({
    placeholder: 'Digite seu texto aqui...',
    lang: 'pt-BR', // default: 'en-US' 
    toolbar: [
        ['basic', ['style', 'fontname', 'fontsize']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['color', ['forecolor', 'backcolor']],
        ['block', ['ul', 'ol', 'paragraph']],
        ['media', ['link', 'picture', 'video', 'table', 'hr']],
        ['heigth', ['heigth', 'codeview', 'fullscreen', 'undo', 'redo']]
    ]
});

$('#btn-limpar').click(function(){
    if($('#summernote').summernote('isEmpty')){
        alert('[ATENÇÃO!] O editor está vazio!');
}else {
    $('#summernote').summernote('reset');
}
});












    

      