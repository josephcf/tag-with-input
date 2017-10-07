(function($){

    function TagInput(search, autocompleteList){
        var search = search || 'search';
        var autocompleteList = autocompleteList || 'autocomplete';
        this.search = $('.' + search);
        this.autocompleteList = $('.' + autocompleteList);
    }

    TagInput.prototype.init = function() {
        var _self = this;
        _self.search.on('click', function(){
            var json = _self.autocomplete();
            _self.autocompleteList.html(_self.generateList(json))
        });
        
        _self.autocompleteList.on('click', 'li', function(){
            var data = $(this).data('item');
           _self.search.append(_self.generateTag(data));
        });
        
        _self.search.on('click','.closeBtn', function(){
            $(this).parent().remove();
        });
        
    };
    
    TagInput.prototype.autocomplete = function(){
        return {
            "apple":'',
            "cherry":'',
            "watermelon": ''
        }
    };
    
    TagInput.prototype.genListItem = function(key) {
        return "<li data-item='"+key+"'>"+key+"</li>";
    };
    
    
    
    TagInput.prototype.generateList = function(data){
        var _self = this;
        var keys = Object.keys(data);
        var list=[];
        list.push("<ul>");
        keys.forEach(function(key){
            list.push(_self.genListItem(key));
        });
        list.push("</ul>");
        return list.join('');
    };
    
    
    TagInput.prototype.generateTag= function(key){
        var span=[];
        span.push("<span class='tagContainer'>");
        span.push("<span>"+key+": </span>");
        span.push("<span><input type='text' class='tagInput' name='"+key+"'/></span>");
        span.push("<span class='closeBtn'><i class='fa fa-times-circle' aria-hidden='true'></i></span>")
        span.push("</span>");
        return span.join('');
    }
    
    $(document).ready(function(){
        var tag = new TagInput();
        tag.init();
    });
})(jQuery)
