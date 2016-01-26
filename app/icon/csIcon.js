module.exports = csIcon;

function csIcon() {
  return {
    restrict: 'E',
    scope: {
      icon: '=',
    },
    template: `
      <div class="col-sm-2">
        <img
          cs-draggable
          cs-droppable
          class="img-responsive"
          alt="{{ icon.id }}"
          id="{{ icon.id }}"
          src="{{ icon.src }}">
      </div>
    `,
  };
}
