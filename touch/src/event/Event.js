/**
 * Just as {@link Ext.dom.Element} wraps around a native DOM node, {@link Ext.event.Event} wraps the browser's native 
 * event-object normalizing cross-browser differences such as mechanisms to stop event-propagation along with a method 
 * to prevent default actions from taking place.
 * 
 * Here is a simple example of how you use it:
 * 
 *     @example preview
 *     Ext.Viewport.add({
 *         layout: 'fit',
 *         items: [
 *             {
 *                 docked: 'top',
 *                 xtype: 'toolbar',
 *                 title: 'Ext.event.Event example!'
 *             },
 *             {
 *                 id: 'logger',
 *                 styleHtmlContent: true,
 *                 html: 'Tap somewhere!',
 *                 padding: 5
 *             }
 *         ]
 *     });
 * 
 *     Ext.Viewport.element.on({
 *         tap: function(e, node) {
 *             var string = '';
 *             
 *             string += 'You tapped at: <strong>{ x: ' + e.pageX + ', y: ' + e.pageY + ' }</strong> <i>(e.pageX & e.pageY)</i>';
 *             string += '<hr />';
 *             string += 'The HTMLElement you tapped has the className of: <strong>' + e.target.className + '</strong> <i>(e.target)</i>';
 *             string += '<hr />';
 *             string += 'The HTMLElement which has the listener has a className of: <strong>' + e.getTarget().className + '</strong> <i>(e.getTarget())</i>';
 * 
 *             Ext.getCmp('logger').setHtml(string);
 *         }
 *     });
 * 
 * ## Recgonisers
 * 
 * Sencha Touch includes a bunch of default event recognisers to know when a user taps, swipes, etc.
 * 
 * For a full list of default recognisers, and more information, please view the {@link Ext.event.recognizer.Recognizer} documentation
 * 
 * @class Ext.event.Event
 */
Ext.define('Ext.event.Event', {
    alternateClassName: 'Ext.EventObject',
    isStopped: false,

    set: function(name, value) {
        if (arguments.length === 1 && typeof name != 'string') {
            var info = name;

            for (name in info) {
                if (info.hasOwnProperty(name)) {
                    this[name] = info[name];
                }
            }
        }
        else {
            this[name] = info[name];
        }
    },

    /**
     * Stop the event (preventDefault and stopPropagation)
     */
    stopEvent: function() {
        return this.stopPropagation();
    },

    /**
     * Cancels bubbling of the event.
     */
    stopPropagation: function() {
        this.isStopped = true;

        return this;
    }
});
