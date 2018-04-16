import '../imports/startup/accounts-config.js'
import '../imports/ui/body.js';

/*
Exception from Tracker afterFlush function:
meteor.js?hash=c9a34f92f28ede5a42eac467d3fa1763b624436a:992 Error: You must pass Tabular.Table instance as the table attribute
    at Blaze.View.<anonymous> (main.js:195)
    at blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:1934
    at Function.Template._withTemplateInstanceFunc (blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:3744)
    at blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:1932
    at Object.Blaze._withCurrentView (blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:2271)
    at viewAutorun (blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:1931)
    at Tracker.Computation._compute (tracker.js?hash=0e8b5c18d543a28ce43b2f183c26b49ee62196af:339)
    at new Tracker.Computation (tracker.js?hash=0e8b5c18d543a28ce43b2f183c26b49ee62196af:229)
    at Object.Tracker.autorun (tracker.js?hash=0e8b5c18d543a28ce43b2f183c26b49ee62196af:613)
    at Blaze.View.autorun (blaze.js?hash=a1ff2d6d5ecd59ee11e2ba260b8650a9d1140f59:1944)

    */