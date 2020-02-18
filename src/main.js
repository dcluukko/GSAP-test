Draggable.create(".icon", {
    bounds:"svg",
    onDrag: function() {
      if (this.hitTest("#bottle")) {
        TweenLite.to(this.target, 0.6, {opacity:0, scale:0, svgOrigin:"400 400"});
        // user.waterintake += bottleval
      }
    }
  });