import campingTentWhite from 'images/camping-tent.svg';
import ko from 'knockout';
import meditationWhite from 'images/meditation.svg';

/**
 * tracked form
 *
 * A component that provides a form for tracked items.
 *
 * @param tracked {observable} The tracked data model to be modified.
 *
 * Usage:
 * <form-tracked-component params="{
 * tracked: modelObjectInstance.tracked
 * }"></form-tracked-component>

 */

export class TrackedForm {
    constructor(params) {
        this.tracked = params.tracked;
        this.formElementHasFocus = ko.observable(false);
        if (params.hasFocus) {
            this.formElementHasFocus = params.hasFocus;
        }
    }
    meditationWhite = meditationWhite;
    campingTentWhite = campingTentWhite;
}

ko.components.register('form-tracked-component', {
    viewModel: TrackedForm,
    template: '\
    <fieldset class="fieldset-bordered">\
      <legend>Tracked</legend>\
      <div data-bind="with: $component.tracked">\
        <div class="form-group">\
          <label for="bonus"\
                 class="control-label">Max</label>\
          <input type="number"\
                 class="form-control"\
                 min="1"\
                 required="true"\
                 data-bind="value: max,\
                 hasFocus: $component.formElementHasFocus">\
        </div>\
        <div class="form-group">\
          <label class="control-label">Resets on...</label>\
          <div class="btn-group btn-group-justified btn-group-sm"\
               role="group">\
            <label class="btn btn-default btn-sm"\
                   data-bind="css: { active: resetsOn() === \'short\'}">\
              <input type="radio"\
                     class="hide-block"\
                     name="featureResetsOnShort"\
                     value="short"\
                     data-bind="checked: resetsOn" />\
              <img class="action-bar-icon"\
                   data-bind="attr: { src: $component.meditationWhite }"></img>\
              &nbsp;&nbsp;&nbsp;Short Rest\
            </label>\
            <label class="btn btn-default  btn-sm"\
                   data-bind="css: { active: resetsOn() === \'long\'}">\
              <input type="radio"\
                     class="hide-block"\
                     name="featureResetsOnLong"\
                     value="long"\
                     data-bind="checked: resetsOn" />\
              <img class="action-bar-icon"\
                   data-bind="attr: { src: $component.campingTentWhite }"></img>\
              &nbsp;&nbsp;&nbsp;Long Rest\
            </label>\
          </div>\
        </div>\
    </fieldset>\
    '
});
