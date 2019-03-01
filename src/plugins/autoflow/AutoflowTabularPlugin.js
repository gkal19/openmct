/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2018, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([
    './AutoflowTabularView'
], function (
    AutoflowTabularView
) {
    /**
     * This plugin provides an Autoflow Tabular View for domain objects
     * in Open MCT.
     *
     * @param {Object} options
     * @param {String} [options.type] the domain object type for which
     *        this view should be available; if omitted, this view will
     *        be available for all objects
     */
    return function (options) {
        return function (openmct) {
            var views = (openmct.mainViews || openmct.objectViews);

            views.addProvider({
                name: "Autoflow Tabular",
                key: "autoflow",
                cssClass: "icon-packet",
                description: "A tabular view of packet contents.",
                canView: function (d) {
                    return !options || (options.type === d.type);
                },
                view: function (domainObject) {
                    return new AutoflowTabularView(
                        domainObject,
                        openmct,
                        document
                    );
                }
            });
        };
    };
});
