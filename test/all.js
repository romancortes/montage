console.log('montage-testing', 'Start');

module.exports = require("montage-testing").run(require, [
    // App
    {name: "spec/application-spec", node: false},
    // Internal
    "spec/bitfield-spec",
    "spec/converter-spec",
    "spec/paths-spec",
    //{name: "spec/node/node-spec", browser: false},
    "spec/enum-spec",
    "spec/gate-spec",
    "spec/logger-spec",
    "spec/paths-spec",
    "spec/state-chart-spec",
    "spec/string-spec",
    "spec/bindings/spec",
    "spec/bindings/converter-spec",
    "spec/bindings/self-spec",
    {name: "spec/document-resources-spec", node: false},
    {name: "spec/claimed-pointer-spec", node: false },
    {name: "spec/montage-custom-element-spec", node: false },
    // Core
    "spec/core/browser-spec",
    "spec/core/core-spec",
    "spec/core/core-require-spec",
    "spec/core/environment-spec",
    "spec/core/request-spec",
    "spec/core/selector-spec",
    "spec/core/criteria-spec",
    "spec/core/super-spec",
    "spec/core/super-for-spec",
    {name: "spec/core/undo-manager-spec", node: false},
    "spec/core/tree-controller-spec",
    "spec/core/extras/function",
    "spec/core/extras/string",
    "spec/core/set-spec",
    {name: "spec/core/dom-spec", node: false, karma: false},
    {name: "spec/core/extras/url", node: false},
    "spec/core/range-controller-spec",
    {name: "spec/core/media-controller-spec", node: false},
    {name: "spec/core/radio-button-controller-spec", node: false},
    // Base
    {name: "spec/base/abstract-control-spec", node: false},
    {name: "spec/base/abstract-alert-spec", node: false},
    {name: "spec/base/abstract-button-spec", node: false},
    {name: "spec/base/abstract-checkbox-spec", node: false},
    {name: "spec/base/abstract-confirm-spec", node: false},
    {name: "spec/base/abstract-image-spec", node: false, karma: false},
    {name: "spec/base/abstract-link-spec", node: false},
    {name: "spec/base/abstract-number-field-spec", node: false},
    {name: "spec/base/abstract-radio-button-spec", node: false},
    {name: "spec/base/abstract-select-spec", node: false},
    {name: "spec/base/abstract-slider-spec", node: false},
    {name: "spec/base/abstract-text-area-spec", node: false},
    {name: "spec/base/abstract-text-field-spec", node: false},
    {name: "spec/base/abstract-toggle-button-spec", node: false},
    {name: "spec/base/abstract-video-spec", node: false},
    // Composer
    {name: "spec/composer/composer-spec", node: false, karma: false},
    {name: "spec/composer/press-composer-spec", node: false, karma: false},
    {name: "spec/composer/key-composer-spec", node: false, karma: false},
    {name: "spec/composer/translate-composer/translate-composer-spec", node: false, karma: false},
    // Events
    {name: "spec/events/active-target-spec", node: false},
    {name: "spec/events/eventmanager-spec", node: false},
    {name: "spec/events/mutable-event-spec", node: false},
    {name: "spec/events/object-hierarchy-spec", node: false},
    //
    {name: "spec/geometry/cubicbezier-spec", node: false},
    {name: "spec/geometry/point-spec", node: false},
    // Serialization
    "spec/serialization/alias-spec",
    "spec/serialization/labeler-spec",
    "spec/serialization/reviver-spec",
    "spec/serialization/interpreter-spec",
    "spec/serialization/visitor-spec",
    "spec/serialization/serialization-extractor-spec",
    "spec/serialization/bindings-spec",
    "spec/serialization/serialization-inspector-spec",
    "spec/serialization/serialization-merger-spec",
    {name: "spec/serialization/montage-serializer-spec"},
    { name: "spec/serialization/montage-deserializer-spec" },
    {name: "spec/serialization/montage-serializer-element-spec", node: false},
    { name: "spec/serialization/montage-deserializer-element-spec", node: false },
    // Trigger
    {name: "spec/trigger/trigger-spec", node: false},
    // UI
    {name: "spec/ui/checkbox-spec", node: false},
    {name: "spec/ui/condition-spec", node: false},
    {name: "spec/ui/button-spec", node: false},
    {name: "spec/ui/control-spec", node: false},
    {name: "spec/ui/firstdraw-spec", node: false},
    {name: "spec/ui/loader-spec", node: false},
    {name: "spec/ui/modal-overlay-spec", node: false},
    {name: "spec/ui/overlay-spec", node: false},
    {name: "spec/ui/slot-spec", node: false},
    {name: "spec/ui/substitution-spec", node: false},
    {name: "spec/ui/text-input-spec", node: false},
    {name: "spec/ui/slider-spec", node: false},
    {name: "spec/ui/text/text-spec", node: false},
    {name: "spec/ui/label/label-spec", node: false},
    {name: "spec/ui/segmented-bar/segmented-bar-spec", node: false, karma: false},
    {name: "spec/ui/flow-spec", node: false},
    {name: "spec/ui/component-spec", node: false},
    // Reel
    {name: "spec/reel/template-spec", node: false, karma: true},
    // UI - repetition
    {name: "spec/ui/repetition-spec", node: false, karma: false},
    {name: "spec/ui/repetition-selection-spec", node: false, karma: false},
    {name: "spec/ui/repetition-binding-spec", node: false},
    {name: "spec/core/localizer-spec", node: false, karma: false},
    {name: "spec/core/localizer/serialization-spec", node: false, karma: false},
    // Data
    {name: "spec/data/data-query"},
    {name: "spec/data/data-mapping"},
    {name: "spec/data/data-object-descriptor"},
    {name: "spec/data/data-property-descriptor"},
    {name: "spec/data/data-provider"},
    {name: "spec/data/data-service"},
    {name: "spec/data/data-stream"},
    {name: "spec/data/expression-data-mapping"},
    {name: "spec/data/enumeration"},
    {name: "spec/data/http-service"},
    {name: "spec/data/object-descriptor"},
    {name: "spec/data/property-descriptor"},
    {name: "spec/data/raw-data-service"},
    {name: "spec/data/raw-data-type-mapping-spec"},
    {name: "spec/data/integration", node: false},

    // Meta
    {name: "spec/meta/module-object-descriptor-spec"},
    {name: "spec/meta/object-descriptor-spec"},
    {name: "spec/meta/converter-object-descriptor-spec", node: false},
    {name: "spec/meta/build-in-component-object-descriptor-spec", node: false},
    {name: "spec/meta/component-object-descriptor-spec", node: false},
    {name: "spec/meta/controller-object-descriptor-spec", node: false},
    {name: "spec/meta/event-descriptor-spec", node: false},
]).then(function () {
    console.log('montage-testing', 'End');
}, function (err) {
    console.log('montage-testing', 'Fail', err, err.stack);
    throw err;
});
