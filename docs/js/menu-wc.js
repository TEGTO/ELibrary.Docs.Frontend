'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">elibrary.frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' : 'data-bs-target="#xs-components-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' :
                                            'id="xs-components-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' }>
                                            <li class="link">
                                                <a href="components/AdminClientDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminClientDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminRegisterUserDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminRegisterUserDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' : 'data-bs-target="#xs-pipes-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' :
                                            'id="xs-pipes-links-module-AdminModule-2d1cd616a0fbc1c8e80903f0b35b16eb4090a486d7e1f95adb0794eca2c24a3e92a04945975b6181255c96239acd275d163f2733cef5360637dc9cce558b6476"' }>
                                            <li class="link">
                                                <a href="pipes/PlaceholderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthenticationModule-6da4fb673ceb158a511ae4ec31e9f114a89ce799cb00a76857795dbd7f0ce02decb71b62c56a7719795ed71db546f764f29affe48334600c30d0a46fb0e10695"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-6da4fb673ceb158a511ae4ec31e9f114a89ce799cb00a76857795dbd7f0ce02decb71b62c56a7719795ed71db546f764f29affe48334600c30d0a46fb0e10695"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-6da4fb673ceb158a511ae4ec31e9f114a89ce799cb00a76857795dbd7f0ce02decb71b62c56a7719795ed71db546f764f29affe48334600c30d0a46fb0e10695"' :
                                            'id="xs-components-links-module-AuthenticationModule-6da4fb673ceb158a511ae4ec31e9f114a89ce799cb00a76857795dbd7f0ce02decb71b62c56a7719795ed71db546f764f29affe48334600c30d0a46fb0e10695"' }>
                                            <li class="link">
                                                <a href="components/AuthenticatedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticatedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OAuthCallbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OAuthCallbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ChatModule-7ba7e1001c2a731e1c6750dce0a263b2ab9190d67ccddcf71e5f2fba2ab78149bd66c684cf00ebb92332374875a1ee7b0e847562d4ab7e790aa7c7360e68a0f5"' : 'data-bs-target="#xs-components-links-module-ChatModule-7ba7e1001c2a731e1c6750dce0a263b2ab9190d67ccddcf71e5f2fba2ab78149bd66c684cf00ebb92332374875a1ee7b0e847562d4ab7e790aa7c7360e68a0f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatModule-7ba7e1001c2a731e1c6750dce0a263b2ab9190d67ccddcf71e5f2fba2ab78149bd66c684cf00ebb92332374875a1ee7b0e847562d4ab7e790aa7c7360e68a0f5"' :
                                            'id="xs-components-links-module-ChatModule-7ba7e1001c2a731e1c6750dce0a263b2ab9190d67ccddcf71e5f2fba2ab78149bd66c684cf00ebb92332374875a1ee7b0e847562d4ab7e790aa7c7360e68a0f5"' }>
                                            <li class="link">
                                                <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' : 'data-bs-target="#xs-components-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' :
                                            'id="xs-components-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' }>
                                            <li class="link">
                                                <a href="components/ClientViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MakeOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MakeOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' : 'data-bs-target="#xs-pipes-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' :
                                            'id="xs-pipes-links-module-ClientModule-2fa20a1e34565f1ebab6b2408753306308d3f7acba7c31bfa88f85f2f9ecb769a64dc0450ee618d01992aaddef9cb046d11500e9bd04f19e7c6d940f2a4cce7f"' }>
                                            <li class="link">
                                                <a href="pipes/PlaceholderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-4e75549efc96d87c7d210fac73fb2a94ad8e94a36e43fad46402360abb2b6b0b8e6d203674ee90fe265f43229040c756d7353ddc8c00a8adfd8da0fc46539376"' : 'data-bs-target="#xs-components-links-module-CoreModule-4e75549efc96d87c7d210fac73fb2a94ad8e94a36e43fad46402360abb2b6b0b8e6d203674ee90fe265f43229040c756d7353ddc8c00a8adfd8da0fc46539376"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-4e75549efc96d87c7d210fac73fb2a94ad8e94a36e43fad46402360abb2b6b0b8e6d203674ee90fe265f43229040c756d7353ddc8c00a8adfd8da0fc46539376"' :
                                            'id="xs-components-links-module-CoreModule-4e75549efc96d87c7d210fac73fb2a94ad8e94a36e43fad46402360abb2b6b0b8e6d203674ee90fe265f43229040c756d7353ddc8c00a8adfd8da0fc46539376"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LibraryModule.html" data-type="entity-link" >LibraryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' : 'data-bs-target="#xs-components-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' :
                                            'id="xs-components-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' }>
                                            <li class="link">
                                                <a href="components/AuthorChangeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorChangeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookChangeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookChangeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenreChangeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreChangeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenreInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LibraryFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LibraryFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublisherChangeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublisherChangeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublisherInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublisherInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' : 'data-bs-target="#xs-pipes-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' :
                                            'id="xs-pipes-links-module-LibraryModule-96bb990823e113ab340c0c81a77537bf1edc53bccb422cbad1be254492006dbfdcb291b644da102286b5c7fa0fd07352a41fa2b4bcea9d18d78cb9c2b9f4b7ab"' }>
                                            <li class="link">
                                                <a href="pipes/BookFallbackCoverPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFallbackCoverPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManagerModule.html" data-type="entity-link" >ManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' : 'data-bs-target="#xs-components-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' :
                                            'id="xs-components-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' }>
                                            <li class="link">
                                                <a href="components/AuthorTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthorTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookStockDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookStockDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookStockTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookStockTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenreTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GenreTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagerTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagerTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublisherTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublisherTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' : 'data-bs-target="#xs-pipes-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' :
                                            'id="xs-pipes-links-module-ManagerModule-bc19d02560eea765c277bc88232b812a41bc3c2c5d4cc9a9d2f7a8fa9fb57c35f048bdd840ac50dd73fd07aa798168c9ba8d7137a4636d5b8d6d6c9e8a6c6763"' }>
                                            <li class="link">
                                                <a href="pipes/PlaceholderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link" >ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' : 'data-bs-target="#xs-components-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' :
                                            'id="xs-components-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' }>
                                            <li class="link">
                                                <a href="components/BookStatisticsFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookStatisticsFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookStockReplenishmentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookStockReplenishmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientChangeDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientChangeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClientInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingCartButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingCartButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' : 'data-bs-target="#xs-directives-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' :
                                        'id="xs-directives-links-module-ShopModule-5f2ae3eac8f656804e433588d4788e42166c07410aa21d003cd99878f8207229b60e7f93f533455de0328e666d192d433e4bc58ce0ccbd44e8569f92d8ff9caa"' }>
                                        <li class="link">
                                            <a href="directives/InputMaxStockDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputMaxStockDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/InputRangeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputRangeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminClientDetailsComponent.html" data-type="entity-link" >AdminClientDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminRegisterUserDialogComponent.html" data-type="entity-link" >AdminRegisterUserDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminTableComponent.html" data-type="entity-link" >AdminTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUserDetailsComponent.html" data-type="entity-link" >AdminUserDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUserFilterComponent.html" data-type="entity-link" >AdminUserFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUserPageComponent.html" data-type="entity-link" >AdminUserPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUserTableComponent.html" data-type="entity-link" >AdminUserTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticatedComponent.html" data-type="entity-link" >AuthenticatedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthorChangeDialogComponent.html" data-type="entity-link" >AuthorChangeDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthorInputComponent.html" data-type="entity-link" >AuthorInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthorTableComponent.html" data-type="entity-link" >AuthorTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BaseSelectInputComponent.html" data-type="entity-link" >BaseSelectInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookChangeDialogComponent.html" data-type="entity-link" >BookChangeDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookFilterComponent.html" data-type="entity-link" >BookFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookInputComponent.html" data-type="entity-link" >BookInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookStatisticsFilterComponent.html" data-type="entity-link" >BookStatisticsFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookStockDetailsComponent.html" data-type="entity-link" >BookStockDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookStockReplenishmentComponent.html" data-type="entity-link" >BookStockReplenishmentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookStockTableComponent.html" data-type="entity-link" >BookStockTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookTableComponent.html" data-type="entity-link" >BookTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CartDialogComponent.html" data-type="entity-link" >CartDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChatComponent.html" data-type="entity-link" >ChatComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientChangeDialogComponent.html" data-type="entity-link" >ClientChangeDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientInfoComponent.html" data-type="entity-link" >ClientInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientViewComponent.html" data-type="entity-link" >ClientViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmMenuComponent.html" data-type="entity-link" >ConfirmMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateClientComponent.html" data-type="entity-link" >CreateClientComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorAnnotatedComponent.html" data-type="entity-link" >ErrorAnnotatedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenericTableComponent.html" data-type="entity-link" >GenericTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenreChangeDialogComponent.html" data-type="entity-link" >GenreChangeDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenreInputComponent.html" data-type="entity-link" >GenreInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenreTableComponent.html" data-type="entity-link" >GenreTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoAnnotatedComponent.html" data-type="entity-link" >InfoAnnotatedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LibraryFilterComponent.html" data-type="entity-link" >LibraryFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadingComponent.html" data-type="entity-link" >LoadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainViewComponent.html" data-type="entity-link" >MainViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MakeOrderComponent.html" data-type="entity-link" >MakeOrderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ManagerTableComponent.html" data-type="entity-link" >ManagerTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OAuthCallbackComponent.html" data-type="entity-link" >OAuthCallbackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderDetailsComponent.html" data-type="entity-link" >OrderDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderHistoryComponent.html" data-type="entity-link" >OrderHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrderTableComponent.html" data-type="entity-link" >OrderTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductInfoComponent.html" data-type="entity-link" >ProductInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductPageComponent.html" data-type="entity-link" >ProductPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublisherChangeDialogComponent.html" data-type="entity-link" >PublisherChangeDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublisherInputComponent.html" data-type="entity-link" >PublisherInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublisherTableComponent.html" data-type="entity-link" >PublisherTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShoppingCartButtonComponent.html" data-type="entity-link" >ShoppingCartButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatisticsChartComponent.html" data-type="entity-link" >StatisticsChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatisticsPageComponent.html" data-type="entity-link" >StatisticsPageComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/InputMaxStockDirective.html" data-type="entity-link" >InputMaxStockDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/InputRangeDirective.html" data-type="entity-link" >InputRangeDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DialogManager.html" data-type="entity-link" >DialogManager</a>
                            </li>
                            <li class="link">
                                <a href="classes/Policy.html" data-type="entity-link" >Policy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Roles.html" data-type="entity-link" >Roles</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddBookStockCommandHandlerService.html" data-type="entity-link" >AddBookStockCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AddClientCommandHandlerService.html" data-type="entity-link" >AddClientCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminControllerService.html" data-type="entity-link" >AdminControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminCreateClientCommandHandlerService.html" data-type="entity-link" >AdminCreateClientCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminDeleteUserCommandHandlerService.html" data-type="entity-link" >AdminDeleteUserCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminDialogManager.html" data-type="entity-link" >AdminDialogManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminDialogManagerService.html" data-type="entity-link" >AdminDialogManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminEffects.html" data-type="entity-link" >AdminEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminRegisterUserCommandHandlerService.html" data-type="entity-link" >AdminRegisterUserCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminUpdateClientCommandHandlerService.html" data-type="entity-link" >AdminUpdateClientCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminUpdateUserCommandHandlerService.html" data-type="entity-link" >AdminUpdateUserCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdvisorApiService.html" data-type="entity-link" >AdvisorApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link" >AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationApiService.html" data-type="entity-link" >AuthenticationApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationControllerService.html" data-type="entity-link" >AuthenticationControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationDialogManager.html" data-type="entity-link" >AuthenticationDialogManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationDialogManagerService.html" data-type="entity-link" >AuthenticationDialogManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorApiService.html" data-type="entity-link" >AuthorApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorControllerService.html" data-type="entity-link" >AuthorControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorEffects.html" data-type="entity-link" >AuthorEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorService.html" data-type="entity-link" >AuthorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseApiService.html" data-type="entity-link" >BaseApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseControllerService.html" data-type="entity-link" >BaseControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookApiService.html" data-type="entity-link" >BookApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookControllerService.html" data-type="entity-link" >BookControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookEffects.html" data-type="entity-link" >BookEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookFallbackCoverPipe.html" data-type="entity-link" >BookFallbackCoverPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookstockApiService.html" data-type="entity-link" >BookstockApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookstockEffects.html" data-type="entity-link" >BookstockEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookstockOrderControllerService.html" data-type="entity-link" >BookstockOrderControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookstockOrderService.html" data-type="entity-link" >BookstockOrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartAddBookCommandHandlerService.html" data-type="entity-link" >CartAddBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartApiService.html" data-type="entity-link" >CartApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartControllerService.html" data-type="entity-link" >CartControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartEffects.html" data-type="entity-link" >CartEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangeChatVisibilityCommandHandlerService.html" data-type="entity-link" >ChangeChatVisibilityCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatControllerService.html" data-type="entity-link" >ChatControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatEffects.html" data-type="entity-link" >ChatEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatService.html" data-type="entity-link" >ChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientAddOrderCommandHandlerService.html" data-type="entity-link" >ClientAddOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientApiService.html" data-type="entity-link" >ClientApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientCancelOrderCommandHandlerService.html" data-type="entity-link" >ClientCancelOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientControllerService.html" data-type="entity-link" >ClientControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientEffects.html" data-type="entity-link" >ClientEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientStartAddingOrderCommandHandlerService.html" data-type="entity-link" >ClientStartAddingOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientUpdateOrderCommandHandlerService.html" data-type="entity-link" >ClientUpdateOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommandHandler.html" data-type="entity-link" >CommandHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateAuthorCommandHandlerService.html" data-type="entity-link" >CreateAuthorCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateBookCommandHandlerService.html" data-type="entity-link" >CreateBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateGenreCommandHandlerService.html" data-type="entity-link" >CreateGenreCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreatePublisherCommandHandlerService.html" data-type="entity-link" >CreatePublisherCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyPipeApplier.html" data-type="entity-link" >CurrencyPipeApplier</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyPipeApplierService.html" data-type="entity-link" >CurrencyPipeApplierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomErrorHandler.html" data-type="entity-link" >CustomErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteAuthorCommandHandlerService.html" data-type="entity-link" >DeleteAuthorCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteBookCommandHandlerService.html" data-type="entity-link" >DeleteBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteCartBookCommandHandlerService.html" data-type="entity-link" >DeleteCartBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteGenreCommandHandlerService.html" data-type="entity-link" >DeleteGenreCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeletePublisherCommandHandlerService.html" data-type="entity-link" >DeletePublisherCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogManagerService.html" data-type="entity-link" >DialogManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Encryptor.html" data-type="entity-link" >Encryptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandler.html" data-type="entity-link" >ErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenericLibraryEntityEffects.html" data-type="entity-link" >GenericLibraryEntityEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenreApiService.html" data-type="entity-link" >GenreApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenreControllerService.html" data-type="entity-link" >GenreControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenreEffects.html" data-type="entity-link" >GenreEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenreService.html" data-type="entity-link" >GenreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibraryDialogManager.html" data-type="entity-link" >LibraryDialogManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibraryDialogManagerService.html" data-type="entity-link" >LibraryDialogManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibraryEntityService.html" data-type="entity-link" >LibraryEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocaleService.html" data-type="entity-link" >LocaleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStorageService.html" data-type="entity-link" >LocalStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogOutCommandHandlerService.html" data-type="entity-link" >LogOutCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagerCancelOrderCommandHandlerService.html" data-type="entity-link" >ManagerCancelOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagerOrderDetailsCommandHandlerService.html" data-type="entity-link" >ManagerOrderDetailsCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManagerUpdateOrderCommandHandlerService.html" data-type="entity-link" >ManagerUpdateOrderCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OAuthLoginCommandHandlerService.html" data-type="entity-link" >OAuthLoginCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderApiService.html" data-type="entity-link" >OrderApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderControllerService.html" data-type="entity-link" >OrderControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderEffects.html" data-type="entity-link" >OrderEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublisherApiService.html" data-type="entity-link" >PublisherApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublisherControllerService.html" data-type="entity-link" >PublisherControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublisherEffects.html" data-type="entity-link" >PublisherEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublisherService.html" data-type="entity-link" >PublisherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedirectorService.html" data-type="entity-link" >RedirectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteReader.html" data-type="entity-link" >RouteReader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteReaderService.html" data-type="entity-link" >RouteReaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendAdvisorMessageCommandHandlerService.html" data-type="entity-link" >SendAdvisorMessageCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopDialogManager.html" data-type="entity-link" >ShopDialogManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopDialogManagerService.html" data-type="entity-link" >ShopDialogManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInCommandHandlerService.html" data-type="entity-link" >SignInCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignUpCommandHandlerService.html" data-type="entity-link" >SignUpCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackbarManager.html" data-type="entity-link" >SnackbarManager</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartAddingClientCommandHandlerService.html" data-type="entity-link" >StartAddingClientCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartAdminRegisterUserCommandHandlerService.html" data-type="entity-link" >StartAdminRegisterUserCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartLoginCommandHandlerService.html" data-type="entity-link" >StartLoginCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartOAuthLoginCommandHandlerService.html" data-type="entity-link" >StartOAuthLoginCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartRegistrationCommandHandlerService.html" data-type="entity-link" >StartRegistrationCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsApiService.html" data-type="entity-link" >StatisticsApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsControllerService.html" data-type="entity-link" >StatisticsControllerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsService.html" data-type="entity-link" >StatisticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateAuthorCommandHandlerService.html" data-type="entity-link" >UpdateAuthorCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateBookCommandHandlerService.html" data-type="entity-link" >UpdateBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateCartBookCommandHandlerService.html" data-type="entity-link" >UpdateCartBookCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateClientCommandHandlerService.html" data-type="entity-link" >UpdateClientCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateGenreCommandHandlerService.html" data-type="entity-link" >UpdateGenreCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdatePublisherCommandHandlerService.html" data-type="entity-link" >UpdatePublisherCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateUserCommandHandlerService.html" data-type="entity-link" >UpdateUserCommandHandlerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/URLDefiner.html" data-type="entity-link" >URLDefiner</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserApiService.html" data-type="entity-link" >UserApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationMessage.html" data-type="entity-link" >ValidationMessage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationMessageService.html" data-type="entity-link" >ValidationMessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/ClientGuard.html" data-type="entity-link" >ClientGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuard.html" data-type="entity-link" >RoleGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddBookStockOrderCommand.html" data-type="entity-link" >AddBookStockOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddBookToCartRequest.html" data-type="entity-link" >AddBookToCartRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddClientCommand.html" data-type="entity-link" >AddClientCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminCreateClientCommand.html" data-type="entity-link" >AdminCreateClientCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminDeleteUserCommand.html" data-type="entity-link" >AdminDeleteUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminGetUserFilter.html" data-type="entity-link" >AdminGetUserFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminRegisterUserCommand.html" data-type="entity-link" >AdminRegisterUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminState.html" data-type="entity-link" >AdminState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUpdateClientCommand.html" data-type="entity-link" >AdminUpdateClientCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUpdateUserCommand.html" data-type="entity-link" >AdminUpdateUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUser.html" data-type="entity-link" >AdminUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUserRegistrationRequest.html" data-type="entity-link" >AdminUserRegistrationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUserResponse.html" data-type="entity-link" >AdminUserResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdminUserUpdateDataRequest.html" data-type="entity-link" >AdminUserUpdateDataRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdvisorQueryRequest.html" data-type="entity-link" >AdvisorQueryRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdvisorResponse.html" data-type="entity-link" >AdvisorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Author.html" data-type="entity-link" >Author</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthorResponse.html" data-type="entity-link" >AuthorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthorState.html" data-type="entity-link" >AuthorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthState.html" data-type="entity-link" >AuthState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthToken.html" data-type="entity-link" >AuthToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthTokenResponse.html" data-type="entity-link" >AuthTokenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookFilterRequest.html" data-type="entity-link" >BookFilterRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookItem.html" data-type="entity-link" >BookItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookResponse.html" data-type="entity-link" >BookResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookState.html" data-type="entity-link" >BookState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookstockOrderState.html" data-type="entity-link" >BookstockOrderState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartAddBookCommand.html" data-type="entity-link" >CartAddBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartBook.html" data-type="entity-link" >CartBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartBookResponse.html" data-type="entity-link" >CartBookResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartResponse.html" data-type="entity-link" >CartResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartState.html" data-type="entity-link" >CartState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChangeChatVisibilityCommand.html" data-type="entity-link" >ChangeChatVisibilityCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatMessage.html" data-type="entity-link" >ChatMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChatState.html" data-type="entity-link" >ChatState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientAddOrderCommand.html" data-type="entity-link" >ClientAddOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientCancelOrderCommand.html" data-type="entity-link" >ClientCancelOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientResponse.html" data-type="entity-link" >ClientResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientStartAddingOrderCommand.html" data-type="entity-link" >ClientStartAddingOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientState.html" data-type="entity-link" >ClientState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientUpdateOrderCommand.html" data-type="entity-link" >ClientUpdateOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientUpdateOrderRequest.html" data-type="entity-link" >ClientUpdateOrderRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Command.html" data-type="entity-link" >Command</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAuthorCommand.html" data-type="entity-link" >CreateAuthorCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAuthorRequest.html" data-type="entity-link" >CreateAuthorRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateBookCommand.html" data-type="entity-link" >CreateBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateBookRequest.html" data-type="entity-link" >CreateBookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateClientRequest.html" data-type="entity-link" >CreateClientRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateGenreCommand.html" data-type="entity-link" >CreateGenreCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateGenreRequest.html" data-type="entity-link" >CreateGenreRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateOrderRequest.html" data-type="entity-link" >CreateOrderRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreatePublisherCommand.html" data-type="entity-link" >CreatePublisherCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreatePublisherRequest.html" data-type="entity-link" >CreatePublisherRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateStockBookOrderRequest.html" data-type="entity-link" >CreateStockBookOrderRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteAuthorCommand.html" data-type="entity-link" >DeleteAuthorCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteBookCommand.html" data-type="entity-link" >DeleteBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteCartBookCommand.html" data-type="entity-link" >DeleteCartBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteCartBookFromCartRequest.html" data-type="entity-link" >DeleteCartBookFromCartRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteGenreCommand.html" data-type="entity-link" >DeleteGenreCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePublisherCommand.html" data-type="entity-link" >DeletePublisherCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenreResponse.html" data-type="entity-link" >GenreResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GenreState.html" data-type="entity-link" >GenreState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetClient.html" data-type="entity-link" >GetClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetClientResponse.html" data-type="entity-link" >GetClientResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetOAuthUrl.html" data-type="entity-link" >GetOAuthUrl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetOAuthUrlQueryParams.html" data-type="entity-link" >GetOAuthUrlQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetOAuthUrlResponse.html" data-type="entity-link" >GetOAuthUrlResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetOrdersFilter.html" data-type="entity-link" >GetOrdersFilter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetShopStatistics.html" data-type="entity-link" >GetShopStatistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetShopStatisticsRequest.html" data-type="entity-link" >GetShopStatisticsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LibraryEntityApi.html" data-type="entity-link" >LibraryEntityApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LibraryFilterRequest.html" data-type="entity-link" >LibraryFilterRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginOAuthRequest.html" data-type="entity-link" >LoginOAuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogOutCommand.html" data-type="entity-link" >LogOutCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerCancelOrderCommand.html" data-type="entity-link" >ManagerCancelOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerOrderDetailsCommand.html" data-type="entity-link" >ManagerOrderDetailsCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerOrderState.html" data-type="entity-link" >ManagerOrderState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerUpdateOrderCommand.html" data-type="entity-link" >ManagerUpdateOrderCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ManagerUpdateOrderRequest.html" data-type="entity-link" >ManagerUpdateOrderRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OAuthLoginCommand.html" data-type="entity-link" >OAuthLoginCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderBook.html" data-type="entity-link" >OrderBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderBookRequest.html" data-type="entity-link" >OrderBookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderBookResponse.html" data-type="entity-link" >OrderBookResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderItem.html" data-type="entity-link" >OrderItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderResponse.html" data-type="entity-link" >OrderResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderState.html" data-type="entity-link" >OrderState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedRequest.html" data-type="entity-link" >PaginatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Publisher.html" data-type="entity-link" >Publisher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublisherResponse.html" data-type="entity-link" >PublisherResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublisherState.html" data-type="entity-link" >PublisherState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendAdvisorMessageCommand.html" data-type="entity-link" >SendAdvisorMessageCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShopStatistics.html" data-type="entity-link" >ShopStatistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ShopStatisticsResponse.html" data-type="entity-link" >ShopStatisticsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInCommand.html" data-type="entity-link" >SignInCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpCommand.html" data-type="entity-link" >SignUpCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartAddingClientCommand.html" data-type="entity-link" >StartAddingClientCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartAdminRegisterUserCommand.html" data-type="entity-link" >StartAdminRegisterUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartLoginCommand.html" data-type="entity-link" >StartLoginCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartOAuthLoginCommand.html" data-type="entity-link" >StartOAuthLoginCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartRegistrationCommand.html" data-type="entity-link" >StartRegistrationCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatisticsBook.html" data-type="entity-link" >StatisticsBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockBookChange.html" data-type="entity-link" >StockBookChange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockBookChangeRequest.html" data-type="entity-link" >StockBookChangeRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockBookChangeResponse.html" data-type="entity-link" >StockBookChangeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockBookOrder.html" data-type="entity-link" >StockBookOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockBookOrderResponse.html" data-type="entity-link" >StockBookOrderResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StockOrderItem.html" data-type="entity-link" >StockOrderItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAuthorCommand.html" data-type="entity-link" >UpdateAuthorCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateAuthorRequest.html" data-type="entity-link" >UpdateAuthorRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateBookCommand.html" data-type="entity-link" >UpdateBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateBookRequest.html" data-type="entity-link" >UpdateBookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateCartBookCommand.html" data-type="entity-link" >UpdateCartBookCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateCartBookRequest.html" data-type="entity-link" >UpdateCartBookRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateClientCommand.html" data-type="entity-link" >UpdateClientCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateClientRequest.html" data-type="entity-link" >UpdateClientRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateGenreCommand.html" data-type="entity-link" >UpdateGenreCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateGenreRequest.html" data-type="entity-link" >UpdateGenreRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePublisherCommand.html" data-type="entity-link" >UpdatePublisherCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePublisherRequest.html" data-type="entity-link" >UpdatePublisherRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateUserCommand.html" data-type="entity-link" >UpdateUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAuth.html" data-type="entity-link" >UserAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAuthenticationRequest.html" data-type="entity-link" >UserAuthenticationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAuthenticationResponse.html" data-type="entity-link" >UserAuthenticationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRegistrationRequest.html" data-type="entity-link" >UserRegistrationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserUpdateRequest.html" data-type="entity-link" >UserUpdateRequest</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/BookFallbackCoverPipe.html" data-type="entity-link" >BookFallbackCoverPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LocalizedDatePipe.html" data-type="entity-link" >LocalizedDatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/PlaceholderPipe.html" data-type="entity-link" >PlaceholderPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});