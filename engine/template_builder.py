import json

self_closing_tags = ("area", "base", "br", "col",
                     "embed", "hr", "img", "input",
                     "link", "meta", "param", "source",
                     "track", "wbr")


class Tag():
    def __init__(
        self,
        tag,
        tag_id=None,
        class_list=[]
    ):
        self.tag = tag
        self.tag_id = tag_id
        self.clas_list = class_list
        self.children = []

    def add_child(self, child):
        self.children.append(child)

    def export_tag(self):
        tag_dict = {}
        return json.dump(tag_dict)
