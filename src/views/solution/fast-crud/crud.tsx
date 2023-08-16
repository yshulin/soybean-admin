import type { AddReq, CreateCrudOptionsRet, DelReq, EditReq, UserPageQuery, UserPageRes } from '@fast-crud/fast-crud';
import { dict } from '@fast-crud/fast-crud';
import dayjs from 'dayjs';
import * as api from './api';

export default function createCrudOptions(): CreateCrudOptionsRet {
  const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
    return api.GetList(query);
  };
  const editRequest = async (ctx: EditReq) => {
    const { form, row } = ctx;
    form.id = row.id;
    return api.UpdateObj(form);
  };
  const delRequest = async (ctx: DelReq) => {
    const { row } = ctx;
    return api.DelObj(row.id);
  };

  const addRequest = async (req: AddReq) => {
    const { form } = req;
    return api.AddObj(form);
  };
  return {
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      container: {
        is: 'fs-layout-card'
      },
      search: {
        options: {
          labelWidth: '120px' // 表单label宽度
        },
        container: {
          // layout: 'multi-line'
          action: {
            label: ' ', // 查询按钮前缀
            col: { span: 6 } // 查询按钮所占格子宽度
          }
        },
        col: {
          span: 6
        }
      },
      columns: {
        id: {
          title: '序号',
          key: 'id',
          type: 'number',
          column: {
            width: 50
          },
          form: {
            show: false
          }
        },
        account: {
          title: '创建人账号',
          key: 'account',
          type: 'text'
        },
        name: {
          title: '创建人姓名',
          key: 'name',
          type: 'text',
          search: { show: true }
        },
        datetime: {
          title: '创建时间',
          type: 'datetime',
          // naive 默认仅支持数字类型时间戳作为日期输入与输出
          // 字符串类型的时间需要转换格式
          valueBuilder(context) {
            const { value, row, key } = context;
            if (value) {
              // naive 默认仅支持时间戳作为日期输入与输出
              row[key] = dayjs(value).valueOf();
            }
          },
          valueResolve(context) {
            const { value, form, key } = context;
            if (value) {
              form[key] = dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            }
          },
          search: { show: true }
        },
        solution_id: {
          title: '方案ID',
          key: 'solution_id',
          type: 'text',
          search: { show: true }
        },
        solution_content: {
          title: '方案描述',
          key: 'solution_content',
          type: 'text',
          column: {
            width: 250
          },
          search: { show: true }
        },
        solution_type: {
          title: '方案分类',
          type: 'text',
          key: 'solution_type',
          search: { show: true }
        },
        instrument_type: {
          title: '适用平台',
          key: 'solution_type',
          type: 'text',
          search: { show: true }
        },
        is_visible: {
          title: '现场端是否可见',
          key: 'is_visible',
          type: 'dict-select',
          dict: dict({
            data: [
              { value: true, label: '是' },
              { value: false, label: '否' }
            ]
          }),
          search: { show: true }
        }
      },
      rowHandle: {
        width: '150px'
      }
    }
  };
}
