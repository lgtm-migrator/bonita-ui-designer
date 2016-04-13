/**
 * Copyright (C) 2015 Bonitasoft S.A.
 * Bonitasoft, 32 rue Gustave Eiffel - 38000 Grenoble
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2.0 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
(() => {
  'use strict';

  class ExpandModal {
    constructor(gettextCatalog) {
      this.restrict = 'E';
      this.templateUrl = 'js/common/directives/expand-modal.tpl.html';
      this.gettextCatalog = gettextCatalog;
    }
    compile() {
      return (scope, element, attrs, controller) => this.link(scope, element, attrs, controller);
    }
    link($scope, element) {
      $scope.expanded = false;
      $scope.toggleExpand = () => {
        element.closest('.modal-dialog').toggleClass('modal-xxl');
        $scope.expanded = !$scope.expanded;
      };
      $scope.getTooltipMessage = () => ($scope.expanded) ? this.gettextCatalog.getString('Go full screen') : this.gettextCatalog.getString('Back to default size');
    }
  }

  angular
    .module('bonitasoft.designer.common.directives')
    .directive('expandModal', gettextCatalog => new ExpandModal(gettextCatalog));
})();
