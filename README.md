卡片管理

git clone到本地；

### npm install -- 下载依赖
### npm start -- 启动（3000端口）

src：    
  view -- App.js(主界面)     
  component      
            -- Card（每个卡片）       
                        -- State（锁定和私密结构）      
            -- addCard（新建卡片）     
            -- Select（下拉选项）       
  mock（mock数据）      
     
使用了ant的组件；       
config-overrides.js文件主要是额外配置antd，可以使用import方式导入某一组件，配置主题；    
